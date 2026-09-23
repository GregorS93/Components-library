import { useState } from "react";
import Button from "../Button/Button.component";
import Toggle from "../Toggle/Toggle.component";
import Drawer from "./Drawer.component";

function DetailsExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="drawer-example">
      <div className="drawer-example-copy">
        <span className="drawer-example-label">Details</span>
        <span className="drawer-example-hint">
          Slides in from the right, for inspecting a record
        </span>
      </div>
      <Button onClick={() => setOpen(true)}>View details</Button>
      <Drawer
        open={open}
        title="Aurora workspace"
        confirmLabel="Done"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p className="drawer-lead">
          Shared notes, files, and the latest publish for the design team.
        </p>
        <dl className="drawer-meta">
          <div>
            <dt>Status</dt>
            <dd>Active</dd>
          </div>
          <div>
            <dt>Owner</dt>
            <dd>Maya Chen</dd>
          </div>
          <div>
            <dt>Updated</dt>
            <dd>2 hours ago</dd>
          </div>
        </dl>
      </Drawer>
    </div>
  );
}

function FiltersExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="drawer-example">
      <div className="drawer-example-copy">
        <span className="drawer-example-label">Filters</span>
        <span className="drawer-example-hint">
          Same panel, from the left, with more than a short message
        </span>
      </div>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Open filters
      </Button>
      <Drawer
        open={open}
        title="Filters"
        side="left"
        confirmLabel="Apply"
        cancelLabel="Clear"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p className="drawer-lead">
          Narrow the list without leaving the page.
        </p>
        <div className="drawer-filters">
          <div className="drawer-filter">
            <span>Only my items</span>
            <Toggle defaultOn label="Only my items" />
          </div>
          <div className="drawer-filter">
            <span>Include archived</span>
            <Toggle label="Include archived" />
          </div>
          <div className="drawer-filter">
            <span>Has comments</span>
            <Toggle defaultOn label="Has comments" />
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default function Drawers() {
  return (
    <div className="drawers-overlay">
      <DetailsExample />
      <FiltersExample />
    </div>
  );
}
