import Search from "./Search.component";

const items = [
  { title: "Badges", hint: "Status labels" },
  { title: "Banners", hint: "Page-level messages" },
  { title: "Buttons", hint: "Primary, secondary, and icon" },
  { title: "Cards", hint: "Content containers" },
  { title: "Inputs", hint: "Text fields and textareas" },
  { title: "Selects", hint: "A menu of options" },
  { title: "Toasts", hint: "Temporary feedback" },
  { title: "Toggles", hint: "On and off switches" },
  { title: "Tooltips", hint: "Hover for extra context" },
];

export default function Searches() {
  return (
    <div className="searches-overlay">
      <div className="search-example">
        <div className="search-example-copy">
          <span className="search-example-label">Idle</span>
          <span className="search-example-hint">Empty field with a search icon</span>
        </div>
        <Search label="Search" placeholder="Search components" items={items} />
      </div>

      <div className="search-example">
        <div className="search-example-copy">
          <span className="search-example-label">Results</span>
          <span className="search-example-hint">
            Matching items and a clear action
          </span>
        </div>
        <Search
          label="Search"
          placeholder="Search components"
          defaultQuery="to"
          items={items}
        />
      </div>
    </div>
  );
}
