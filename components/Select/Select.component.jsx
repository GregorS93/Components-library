import { useEffect, useId, useRef, useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import clsx from "clsx";

export default function Select({
  label,
  helper,
  error,
  placeholder = "Select an option",
  options,
  defaultValue,
  disabled = false,
  onChange,
}) {
  const id = useId();
  const listId = `${id}-list`;
  const messageId = `${id}-message`;
  const rootRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const selectedIndex = options.findIndex((option) => option.value === value);
  const [highlightedIndex, setHighlightedIndex] = useState(
    Math.max(0, selectedIndex)
  );
  const selected = options.find((option) => option.value === value);
  const describedBy = error || helper ? messageId : undefined;

  useEffect(() => {
    if (!open) return undefined;

    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [open]);

  function openMenu() {
    if (disabled) return;
    setHighlightedIndex(Math.max(0, selectedIndex));
    setOpen(true);
  }

  function selectOption(option) {
    if (option.disabled) return;
    setValue(option.value);
    setOpen(false);
    onChange?.(option.value);
  }

  function handleTriggerKeyDown(event) {
    if (disabled) return;

    if (!open) {
      if (
        event.key === "ArrowDown" ||
        event.key === "ArrowUp" ||
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();
        openMenu();
      }
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
      return;
    }

    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const offset = event.key === "ArrowDown" ? 1 : -1;
      setHighlightedIndex(
        (current) => (current + offset + options.length) % options.length
      );
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectOption(options[highlightedIndex]);
    }
  }

  return (
    <div
      className={clsx(
        "field",
        "select-field",
        error && "is-error",
        open && "is-open"
      )}
      ref={rootRef}
    >
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <button
        type="button"
        id={id}
        className="field-control select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        disabled={disabled}
        onClick={() => (open ? setOpen(false) : openMenu())}
        onKeyDown={handleTriggerKeyDown}
      >
        <span className={clsx(!selected && "select-placeholder")}>
          {selected?.label ?? placeholder}
        </span>
        <FiChevronDown
          className={clsx("select-chevron", open && "is-open")}
          aria-hidden="true"
        />
      </button>
      {open && (
        <ul className="select-menu" id={listId} role="listbox">
          {options.map((option, index) => (
            <li key={option.value}>
              <button
                type="button"
                role="option"
                className={clsx(
                  "select-option",
                  value === option.value && "is-selected",
                  index === highlightedIndex && "is-highlighted"
                )}
                aria-selected={value === option.value}
                disabled={option.disabled}
                onMouseEnter={() => setHighlightedIndex(index)}
                onClick={() => selectOption(option)}
              >
                <span>{option.label}</span>
                {value === option.value && (
                  <FiCheck className="select-check" aria-hidden="true" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
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
