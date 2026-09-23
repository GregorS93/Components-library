import { createContext, useContext, useId, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import clsx from "clsx";
import "../../css/accordion.css";

const AccordionContext = createContext(null);
const ItemContext = createContext(null);

function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion compound parts must be used inside Accordion");
  }
  return context;
}

function useItem() {
  const context = useContext(ItemContext);
  if (!context) {
    throw new Error("Accordion.Header and Accordion.Panel must be used inside Accordion.Item");
  }
  return context;
}

export default function Accordion({
  children,
  type = "single",
  defaultValue,
  className,
}) {
  const [openItems, setOpenItems] = useState(() => {
    if (type === "multiple") {
      if (defaultValue == null) return [];
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return defaultValue ?? null;
  });

  function isOpen(value) {
    return type === "multiple"
      ? openItems.includes(value)
      : openItems === value;
  }

  function toggle(value) {
    if (type === "multiple") {
      setOpenItems((current) =>
        current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value]
      );
      return;
    }

    setOpenItems((current) => (current === value ? null : value));
  }

  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      <div className={clsx("accordion", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

function Item({ value, children }) {
  const { isOpen, toggle } = useAccordion();
  const headerId = useId();
  const panelId = useId();
  const open = isOpen(value);

  return (
    <ItemContext.Provider
      value={{
        open,
        toggle: () => toggle(value),
        headerId,
        panelId,
      }}
    >
      <div className={clsx("accordion-item", open && "is-open")}>
        {children}
      </div>
    </ItemContext.Provider>
  );
}

function Header({ children }) {
  const { open, toggle, headerId, panelId } = useItem();

  return (
    <h3 className="accordion-heading">
      <button
        type="button"
        id={headerId}
        className="accordion-header"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
      >
        <span className="accordion-header-label">{children}</span>
        <FiChevronDown className="accordion-chevron" aria-hidden="true" />
      </button>
    </h3>
  );
}

function Panel({ children }) {
  const { open, headerId, panelId } = useItem();

  return (
    <div
      id={panelId}
      role="region"
      aria-labelledby={headerId}
      hidden={!open}
      className="accordion-panel"
    >
      <p className="accordion-panel-inner">{children}</p>
    </div>
  );
}

Accordion.Item = Item;
Accordion.Header = Header;
Accordion.Panel = Panel;
