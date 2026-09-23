import { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import clsx from "clsx";
import Badge from "./components/Badge/Badge.component";
import Banners from "./components/Banners/Banners.component";
import Card from "./components/Card/Card.component";
import TestimonialLogo from "./components/Testimonials/TestimonialLogo.component";
import TestimonialPicture from "./components/Testimonials/TestimonialPicture.component";
import Tooltip from "./components/Tooltip/Tooltip.component";
import Toasts from "./components/Toasts/Toasts.component";
import Buttons from "./components/Button/Buttons.component";
import Toggles from "./components/Toggle/Toggles.component";
import Choices from "./components/Choice/Choices.component";
import Inputs from "./components/Input/Inputs.component";
import Selects from "./components/Select/Selects.component";
import Searches from "./components/Search/Searches.component";
import Modals from "./components/Modal/Modals.component";
import Drawers from "./components/Drawer/Drawers.component";
import Popovers from "./components/Popover/Popovers.component";
import Accordions from "./components/Accordion/Accordions.component";
import TabsExamples from "./components/Tabs/TabsExamples.component";
import "./css/accordion.css";
import "./css/tabs.css";

const SECTIONS = [
  {
    id: "badges",
    index: "01",
    title: "Badges",
    render: () => (
      <div className="badges">
        <Badge />
        <br />
        <Badge roundEdge />
      </div>
    ),
  },
  {
    id: "banners",
    index: "02",
    title: "Banners",
    render: () => <Banners />,
  },
  {
    id: "cards",
    index: "03",
    title: "Cards",
    render: () => (
      <div className="card-background">
        <Card />
      </div>
    ),
  },
  {
    id: "testimonials",
    index: "04",
    title: "Testimonials",
    wide: true,
    render: () => (
      <>
        <TestimonialLogo />
        <br />
        <br />
        <TestimonialPicture />
      </>
    ),
  },
  {
    id: "tooltips",
    index: "05",
    title: "Tooltips",
    render: () => (
      <>
        <Tooltip style="light" />
        <br />
        <br />
        <Tooltip style="dark" />
      </>
    ),
  },
  {
    id: "toasts",
    index: "06",
    title: "Toasts",
    render: () => <Toasts />,
  },
  {
    id: "buttons",
    index: "07",
    title: "Buttons",
    render: () => <Buttons />,
  },
  {
    id: "toggles",
    index: "08",
    title: "Toggles",
    render: () => <Toggles />,
  },
  {
    id: "choices",
    index: "09",
    title: "Choices",
    render: () => <Choices />,
  },
  {
    id: "inputs",
    index: "10",
    title: "Inputs",
    render: () => <Inputs />,
  },
  {
    id: "selects",
    index: "11",
    title: "Selects",
    render: () => <Selects />,
  },
  {
    id: "search",
    index: "12",
    title: "Search",
    render: () => <Searches />,
  },
  {
    id: "modals",
    index: "13",
    title: "Modals",
    render: () => <Modals />,
  },
  {
    id: "drawers",
    index: "14",
    title: "Drawers",
    render: () => <Drawers />,
  },
  {
    id: "popovers",
    index: "15",
    title: "Popovers",
    render: () => <Popovers />,
  },
  {
    id: "accordions",
    index: "16",
    title: "Accordions",
    render: () => <Accordions />,
  },
  {
    id: "tabs",
    index: "17",
    title: "Tabs",
    render: () => <TabsExamples />,
  },
];

function SectionHeading({ index, title }) {
  return (
    <h2 className="section-heading" id="component-panel-heading">
      <span className="section-index">{index}</span>
      <span className="section-title">{title}</span>
    </h2>
  );
}

function ComponentNav({ sections, activeId, onChange }) {
  const optionRefs = useRef([]);

  function select(id, index) {
    onChange(id);
    optionRefs.current[index]?.focus();
  }

  function handleKeyDown(event, index) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();
    const offset = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + offset + sections.length) % sections.length;
    select(sections[nextIndex].id, nextIndex);
  }

  return (
    <div className="component-nav" role="tablist" aria-label="Components">
      {sections.map((section, index) => {
        const selected = section.id === activeId;

        return (
          <button
            key={section.id}
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls="component-panel"
            tabIndex={selected ? 0 : -1}
            className={clsx("component-nav-item", selected && "is-selected")}
            ref={(node) => {
              optionRefs.current[index] = node;
            }}
            onClick={() => select(section.id, index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {section.title}
          </button>
        );
      })}
    </div>
  );
}

function App() {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const active = SECTIONS.find((section) => section.id === activeId) ?? SECTIONS[0];

  return (
    <>
      <header className="page-header">
        <p className="page-eyebrow">Component library</p>
        <h1>
          Favorite components,
          <br />
          <em>gathered in</em> one place
        </h1>
        <p className="page-subtitle">
          A small library of React building blocks I actually use.
        </p>
        <ComponentNav
          sections={SECTIONS}
          activeId={active.id}
          onChange={setActiveId}
        />
      </header>

      <section
        className="component-section"
        id="component-panel"
        role="tabpanel"
        aria-labelledby="component-panel-heading"
      >
        {active.wide ? (
          <>
            <div className="section-inner">
              <SectionHeading
                index={active.index}
                title={active.title}
              />
            </div>
            <div className="section-inner section-inner-wide">
              {active.render()}
            </div>
          </>
        ) : (
          <div className="section-inner">
            <SectionHeading index={active.index} title={active.title} />
            {active.render()}
          </div>
        )}
      </section>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
