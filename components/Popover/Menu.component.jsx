import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Popover from "./Popover.component";

export default function Menu({
  label = "Actions",
  variant = "secondary",
  items,
  defaultOpen = false,
}) {
  const [open, setOpen] = useState(defaultOpen);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (!open) return undefined;
    setHighlightedIndex(0);
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    itemRefs.current[highlightedIndex]?.focus();
  }, [open, highlightedIndex]);

  return (
    <Popover
      label={label}
      variant={variant}
      defaultOpen={defaultOpen}
      ariaHasPopup="menu"
      panelRole="menu"
      panelLabel={label}
      onOpenChange={setOpen}
    >
      {({ close }) => (
        <div
          className="popover-menu"
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              const offset = event.key === "ArrowDown" ? 1 : -1;
              setHighlightedIndex(
                (current) => (current + offset + items.length) % items.length
              );
            }
          }}
        >
          {items.map((item, index) => (
            <button
              key={item.label}
              type="button"
              role="menuitem"
              className={clsx(
                "popover-menu-item",
                item.danger && "is-danger",
                index === highlightedIndex && "is-highlighted"
              )}
              ref={(node) => {
                itemRefs.current[index] = node;
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => {
                item.onSelect?.();
                close();
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </Popover>
  );
}
