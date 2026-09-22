import { useEffect, useId, useRef, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import clsx from "clsx";

export default function Search({
  label,
  placeholder = "Search",
  items,
  defaultQuery = "",
  onChange,
  onSelect,
}) {
  const id = useId();
  const listId = `${id}-list`;
  const inputRef = useRef(null);
  const rootRef = useRef(null);
  const [query, setQuery] = useState(defaultQuery);
  const [open, setOpen] = useState(Boolean(defaultQuery.trim()));
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const trimmed = query.trim();
  const results = items.filter((item) => {
    const haystack = `${item.title} ${item.hint ?? ""}`.toLowerCase();
    return haystack.includes(trimmed.toLowerCase());
  });
  const showResults = open && trimmed.length > 0;

  useEffect(() => {
    if (!showResults) return undefined;

    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, [showResults]);

  function updateQuery(nextQuery) {
    setQuery(nextQuery);
    setHighlightedIndex(0);
    setOpen(nextQuery.trim().length > 0);
    onChange?.(nextQuery);
  }

  function clear() {
    updateQuery("");
    inputRef.current?.focus();
  }

  function pick(item) {
    setQuery(item.title);
    setOpen(false);
    onChange?.(item.title);
    onSelect?.(item);
  }

  function handleKeyDown(event) {
    if (!showResults) {
      if (event.key === "Escape" && query) {
        event.preventDefault();
        clear();
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
      if (results.length === 0) return;
      const offset = event.key === "ArrowDown" ? 1 : -1;
      setHighlightedIndex(
        (current) => (current + offset + results.length) % results.length
      );
      return;
    }

    if (event.key === "Enter" && results[highlightedIndex]) {
      event.preventDefault();
      pick(results[highlightedIndex]);
    }
  }

  return (
    <div className={clsx("search-field", showResults && "is-open")} ref={rootRef}>
      {label && (
        <label className="field-label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="search-control">
        <FiSearch className="search-icon" aria-hidden="true" />
        <input
          ref={inputRef}
          id={id}
          type="search"
          className="field-control search-input"
          role="combobox"
          placeholder={placeholder}
          value={query}
          autoComplete="off"
          aria-expanded={showResults}
          aria-controls={listId}
          aria-autocomplete="list"
          onChange={(event) => updateQuery(event.target.value)}
          onFocus={() => trimmed && setOpen(true)}
          onKeyDown={handleKeyDown}
        />
        {query && (
          <button
            type="button"
            className="search-clear"
            aria-label="Clear search"
            onClick={clear}
          >
            <FiX aria-hidden="true" />
          </button>
        )}
      </div>
      {showResults && (
        <ul className="search-results" id={listId} role="listbox">
          {results.length === 0 ? (
            <li className="search-empty">No results for “{trimmed}”</li>
          ) : (
            results.map((item, index) => (
              <li key={item.title}>
                <button
                  type="button"
                  role="option"
                  className={clsx(
                    "search-result",
                    index === highlightedIndex && "is-highlighted"
                  )}
                  aria-selected={index === highlightedIndex}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  onClick={() => pick(item)}
                >
                  <span className="search-result-title">{item.title}</span>
                  {item.hint && (
                    <span className="search-result-hint">{item.hint}</span>
                  )}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}
