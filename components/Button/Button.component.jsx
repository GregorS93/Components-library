import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  icon,
  disabled = false,
  loading = false,
  type = "button",
  className,
  ...props
}) {
  const iconOnly = Boolean(icon) && !children;
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={clsx(
        "btn",
        variant === "secondary" && "btn-secondary",
        variant === "danger" && "btn-danger",
        variant !== "secondary" && variant !== "danger" && "btn-primary",
        iconOnly && "btn-icon",
        loading && "btn-loading",
        className
      )}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      {loading ? <span className="btn-spinner" aria-hidden="true" /> : icon}
      {children && <span className="btn-label">{children}</span>}
    </button>
  );
}
