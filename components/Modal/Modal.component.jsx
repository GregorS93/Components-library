import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "../Button/Button.component";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export default function Modal({
  open,
  title,
  children,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  danger = false,
  onConfirm,
  onCancel,
}) {
  const dialogRef = useRef(null);
  const previouslyFocused = useRef(null);
  const onCancelRef = useRef(onCancel);
  const titleId = useId();
  const descriptionId = useId();

  onCancelRef.current = onCancel;

  useEffect(() => {
    if (!open) return undefined;

    previouslyFocused.current = document.activeElement;
    const dialog = dialogRef.current;
    const getFocusable = () => [...dialog.querySelectorAll(FOCUSABLE)];
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
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onCancelRef.current?.();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
      >
        <h3 className="modal-title" id={titleId}>
          {title}
        </h3>
        <p className="modal-body" id={descriptionId}>
          {children}
        </p>
        <div className="modal-actions">
          <Button variant="secondary" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button
            variant={danger ? "danger" : "primary"}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
}
