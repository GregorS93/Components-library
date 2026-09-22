import clsx from "clsx";
import useToggle from "../../hooks/useToggle";

export default function Toggle({
  defaultOn = false,
  disabled = false,
  onToggle,
  label,
  ...props
}) {
  const [on, toggle] = useToggle({
    initialValue: defaultOn,
    onToggle,
  });

  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      disabled={disabled}
      className={clsx("toggle", on && "toggle-on")}
      onClick={toggle}
      {...props}
    >
      <span className="toggle-track" aria-hidden="true">
        <span className="toggle-thumb" />
      </span>
    </button>
  );
}
