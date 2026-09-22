import { useRef, useState } from "react";
import clsx from "clsx";

export default function Segmented({ options, defaultValue, onChange }) {
  const [value, setValue] = useState(defaultValue ?? options[0]?.value);
  const optionRefs = useRef([]);
  const selectedIndex = Math.max(
    0,
    options.findIndex((option) => option.value === value)
  );

  function select(nextValue, index) {
    setValue(nextValue);
    onChange?.(nextValue);
    optionRefs.current[index]?.focus();
  }

  function handleKeyDown(event, index) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + offset + options.length) % options.length;
    select(options[nextIndex].value, nextIndex);
  }

  return (
    <div
      className="segmented"
      role="radiogroup"
      style={{
        "--segment-count": options.length,
        "--segment-index": selectedIndex,
      }}
    >
      <span className="segmented-indicator" aria-hidden="true" />
      {options.map((option, index) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          className={clsx(
            "segmented-option",
            value === option.value && "is-selected"
          )}
          ref={(node) => {
            optionRefs.current[index] = node;
          }}
          onClick={() => select(option.value, index)}
          onKeyDown={(event) => handleKeyDown(event, index)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
