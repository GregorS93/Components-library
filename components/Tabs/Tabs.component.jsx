import { createContext, useContext, useId, useRef, useState } from "react";
import clsx from "clsx";
import "../../css/tabs.css";

const TabsContext = createContext(null);

function useTabs() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs compound parts must be used inside Tabs");
  }
  return context;
}

export default function Tabs({
  children,
  defaultValue,
  className,
}) {
  const baseId = useId();
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue, baseId }}>
      <div className={clsx("tabs", className)}>{children}</div>
    </TabsContext.Provider>
  );
}

function List({ children, label = "Content" }) {
  const listRef = useRef(null);

  function handleKeyDown(event) {
    if (
      event.key !== "ArrowRight" &&
      event.key !== "ArrowLeft" &&
      event.key !== "Home" &&
      event.key !== "End"
    ) {
      return;
    }

    const tabs = [
      ...listRef.current.querySelectorAll('[role="tab"]:not(:disabled)'),
    ];
    if (tabs.length === 0) return;

    event.preventDefault();
    const currentIndex = tabs.indexOf(document.activeElement);
    let nextIndex = currentIndex;

    if (event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    }

    tabs[nextIndex]?.click();
    tabs[nextIndex]?.focus();
  }

  return (
    <div
      ref={listRef}
      className="tabs-list"
      role="tablist"
      aria-label={label}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
}

function Tab({ value, disabled = false, children }) {
  const { value: active, setValue, baseId } = useTabs();
  const selected = active === value;

  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      className={clsx("tabs-tab", selected && "is-selected")}
      aria-selected={selected}
      aria-controls={`${baseId}-panel-${value}`}
      tabIndex={selected ? 0 : -1}
      disabled={disabled}
      onClick={() => {
        if (!disabled) setValue(value);
      }}
    >
      {children}
    </button>
  );
}

function Panel({ value, children }) {
  const { value: active, baseId } = useTabs();
  const selected = active === value;

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      className="tabs-panel"
      aria-labelledby={`${baseId}-tab-${value}`}
      hidden={!selected}
    >
      {children}
    </div>
  );
}

Tabs.List = List;
Tabs.Tab = Tab;
Tabs.Panel = Panel;
