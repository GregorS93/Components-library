import { useEffect, useId, useRef, useState } from "react";
import clsx from "clsx";
import Button from "../Button/Button.component";

export default function Popover({
  label,
  variant = "secondary",
  icon,
  align = "start",
  defaultOpen = false,
  ariaHasPopup = "dialog",
  panelRole = "dialog",
  panelLabel,
  onOpenChange,
  children,
}) {
  const id = useId();
  const panelId = `${id}-panel`;
  const rootRef = useRef(null);
  const onOpenChangeRef = useRef(onOpenChange);
  const [open, setOpen] = useState(defaultOpen);

  onOpenChangeRef.current = onOpenChange;

  function updateOpen(next) {
    setOpen(next);
    onOpenChangeRef.current?.(next);
  }

  useEffect(() => {
    if (!open) return undefined;

    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        updateOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        updateOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      className={clsx("popover", open && "is-open")}
      ref={rootRef}
    >
      <Button
        variant={variant}
        icon={icon}
        aria-haspopup={ariaHasPopup}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => updateOpen(!open)}
      >
        {label}
      </Button>
      {open && (
        <div
          id={panelId}
          role={panelRole}
          aria-label={panelLabel ?? label}
          className={clsx("popover-panel", `popover-align-${align}`)}
        >
          {typeof children === "function"
            ? children({ close: () => updateOpen(false) })
            : children}
        </div>
      )}
    </div>
  );
}
