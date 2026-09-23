import { Children, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import clsx from "clsx";
import "../../css/breadcrumbs.css";

export default function Breadcrumbs({
  children,
  maxItems,
  label = "Breadcrumb",
  className,
}) {
  const items = Children.toArray(children);
  const [expanded, setExpanded] = useState(false);
  const shouldCollapse =
    Boolean(maxItems) && items.length > maxItems && !expanded;
  const tailCount = Math.max(1, (maxItems ?? items.length) - 2);
  const visibleItems = shouldCollapse
    ? [items[0], null, ...items.slice(-tailCount)]
    : items;

  return (
    <nav
      className={clsx("breadcrumbs", className)}
      aria-label={label}
    >
      <ol className="breadcrumbs-list">
        {visibleItems.map((item, index) => (
          <li key={index} className="breadcrumbs-item">
            {index > 0 && (
              <FiChevronRight
                className="breadcrumbs-separator"
                aria-hidden="true"
              />
            )}
            {item ?? (
              <button
                type="button"
                className="breadcrumbs-ellipsis"
                aria-label="Show full path"
                onClick={() => setExpanded(true)}
              >
                …
              </button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function Item({ current = false, onSelect, children }) {
  if (current) {
    return (
      <span className="breadcrumbs-current" aria-current="page">
        {children}
      </span>
    );
  }

  return (
    <button
      type="button"
      className="breadcrumbs-link"
      onClick={onSelect}
    >
      {children}
    </button>
  );
}

Breadcrumbs.Item = Item;
