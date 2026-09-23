import clsx from "clsx";
import "../../css/badge.css";

export default function Badge({
  children = "Badge",
  color = "grey",
  round = false,
  className,
}) {
  return (
    <span
      className={clsx(
        "badge",
        `badge-${color}`,
        round && "badge-round",
        className
      )}
    >
      {children}
    </span>
  );
}
