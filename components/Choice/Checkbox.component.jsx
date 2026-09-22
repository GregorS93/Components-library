import clsx from "clsx";
import useToggle from "../../hooks/useToggle";

export default function Checkbox({
  label,
  defaultChecked = false,
  disabled = false,
  onToggle,
}) {
  const [checked, toggle] = useToggle({
    initialValue: defaultChecked,
    onToggle,
  });

  return (
    <label
      className={clsx(
        "choice-item",
        checked && "is-checked",
        disabled && "is-disabled"
      )}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={toggle}
      />
      <span className="choice-control choice-control-check" aria-hidden="true">
        <svg viewBox="0 0 16 16" className="choice-check">
          <path
            d="M3.5 8.5 6.5 11.5 12.5 4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="choice-text">{label}</span>
    </label>
  );
}
