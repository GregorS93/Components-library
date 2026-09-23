import clsx from "clsx";
import { FiX } from "react-icons/fi";
import "../../css/toast.css";

export default function Toast({
  title,
  text,
  status = "info",
  icon,
  onClose,
}) {
  return (
    <div
      className={clsx("toast", `toast-${status}`)}
      role="status"
      aria-live="polite"
    >
      <span className="toast-icon" aria-hidden="true">
        {icon}
      </span>
      <div className="toast-copy">
        <p className="toast-title">{title}</p>
        <p className="toast-text">{text}</p>
      </div>
      {onClose && (
        <button
          type="button"
          className="toast-close"
          aria-label="Dismiss"
          onClick={onClose}
        >
          <FiX aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
