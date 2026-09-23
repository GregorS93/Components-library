import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs.component";

function Trail({ labels, maxItems, initialIndex }) {
  const [current, setCurrent] = useState(initialIndex ?? labels.length - 1);

  return (
    <Breadcrumbs maxItems={maxItems}>
      {labels.map((label, index) => (
        <Breadcrumbs.Item
          key={label}
          current={index === current}
          onSelect={() => setCurrent(index)}
        >
          {label}
        </Breadcrumbs.Item>
      ))}
    </Breadcrumbs>
  );
}

export default function BreadcrumbsExamples() {
  return (
    <div className="breadcrumbs-overlay">
      <div className="breadcrumbs-example">
        <div className="breadcrumbs-example-copy">
          <p className="breadcrumbs-example-label">Default</p>
          <p className="breadcrumbs-example-hint">
            Path through a hierarchy
          </p>
        </div>
        <Trail labels={["Home", "Projects", "Aurora workspace"]} />
      </div>

      <div className="breadcrumbs-example">
        <div className="breadcrumbs-example-copy">
          <p className="breadcrumbs-example-label">Collapsed</p>
          <p className="breadcrumbs-example-hint">
            A long path, with the middle hidden until you expand it
          </p>
        </div>
        <Trail
          maxItems={4}
          labels={[
            "Home",
            "Settings",
            "Workspace",
            "Team",
            "Members",
            "Maya Chen",
          ]}
        />
      </div>
    </div>
  );
}
