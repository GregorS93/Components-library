import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import clsx from "clsx";
import Button from "../Button/Button.component";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function Drawer({
  open,
  title,
  children,
  side = "right",
  confirmLabel = "Done",
  cancelLabel,
  onConfirm,
  onCancel,
}) {
  const panelRef = useRef(null);
  const previouslyFocused = useRef(null);
  const onCancelRef = useRef(onCancel);
  const titleId = useId();
  const descriptionId = useId();

  onCancelRef.current = onCancel;

  useEffect(() => {
    if (!open) return undefined;

    previouslyFocused.current = document.activeElement;
    const panel = panelRef.current;
    const getFocusable = () => [...panel.querySelectorAll(FOCUSABLE)];
    getFocusable()[0]?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCancelRef.current?.();
        return;
      }

      if (event.key !== "Tab") return;

      const nodes = getFocusable();
      if (nodes.length === 0) {
        event.preventDefault();
        return;
      }

      const first = nodes[0];
      const last = nodes[nodes.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus?.();
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className={clsx("drawer-backdrop", `drawer-backdrop-${side}`)}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onCancelRef.current?.();
        }
      }}
    >
      <div
        ref={panelRef}
        className={clsx("drawer-panel", `drawer-panel-${side}`)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <div className="drawer-header">
          <h3 className="drawer-title" id={titleId}>
            {title}
          </h3>
          <button
            type="button"
            className="drawer-close"
            aria-label="Close"
            onClick={onCancel}
          >
            <FiX aria-hidden="true" />
          </button>
        </div>
        <div className="drawer-body" id={descriptionId}>
          {children}
        </div>
        <div className="drawer-actions">
          {cancelLabel && (
            <Button variant="secondary" onClick={onCancel}>
              {cancelLabel}
            </Button>
          )}
          <Button onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
