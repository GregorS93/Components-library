import { useState } from "react";
import clsx from "clsx";

export default function Radio({
  name,
  options,
  defaultValue,
  onChange,
}) {
  const [value, setValue] = useState(defaultValue ?? options[0]?.value);

  function select(nextValue) {
    setValue(nextValue);
    onChange?.(nextValue);
  }

  return (
    <div className="choice-group" role="radiogroup" aria-label={name}>
      {options.map((option) => {
        const checked = value === option.value;

        return (
          <label
            key={option.value}
            className={clsx(
              "choice-item",
              checked && "is-checked",
              option.disabled && "is-disabled"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={checked}
              disabled={option.disabled}
              onChange={() => select(option.value)}
            />
            <span
              className="choice-control choice-control-radio"
              aria-hidden="true"
            />
            <span className="choice-text">{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}
