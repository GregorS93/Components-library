import { useState } from "react";
import Select from "./Select.component";

const roles = [
  { value: "designer", label: "Product designer" },
  { value: "engineer", label: "Engineer" },
  { value: "writer", label: "Writer" },
];

function ErrorSelect() {
  const [value, setValue] = useState();

  return (
    <Select
      label="Role"
      placeholder="Select a role"
      error={value ? undefined : "Choose a role to continue"}
      options={roles}
      onChange={setValue}
    />
  );
}

export default function Selects() {
  return (
    <div className="selects-overlay">
      <div className="select-example">
        <div className="select-example-copy">
          <span className="select-example-label">Default</span>
          <span className="select-example-hint">Choose one option</span>
        </div>
        <Select label="Role" defaultValue="designer" options={roles} />
      </div>

      <div className="select-example">
        <div className="select-example-copy">
          <span className="select-example-label">Helper</span>
          <span className="select-example-hint">
            Extra guidance under a valid field
          </span>
        </div>
        <Select
          label="Role"
          defaultValue="designer"
          helper="Shown on your public profile"
          options={roles}
        />
      </div>

      <div className="select-example">
        <div className="select-example-copy">
          <span className="select-example-label">Error</span>
          <span className="select-example-hint">
            Shown until an option is chosen
          </span>
        </div>
        <ErrorSelect />
      </div>

      <div className="select-example">
        <div className="select-example-copy">
          <span className="select-example-label">Disabled</span>
          <span className="select-example-hint">Cannot be opened</span>
        </div>
        <Select
          label="Role"
          defaultValue="designer"
          disabled
          options={roles}
        />
      </div>
    </div>
  );
}
