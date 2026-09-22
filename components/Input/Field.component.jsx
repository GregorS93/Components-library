import { cloneElement, useId } from "react";
import clsx from "clsx";

export default function Field({ label, helper, error, children }) {
  const id = useId();
  const messageId = `${id}-message`;
  const describedBy = error || helper ? messageId : undefined;

  return (
    <div className={clsx("field", error && "is-error")}>
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      {cloneElement(children, {
        id,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": describedBy,
      })}
      {(error || helper) && (
        <p
          className={clsx("field-message", error && "is-error")}
          id={messageId}
          role={error ? "alert" : undefined}
        >
          {error || helper}
        </p>
      )}
    </div>
  );
}
