import { FiPlus } from "react-icons/fi";
import Button from "./Button.component";

const examples = [
  {
    label: "Primary",
    button: <Button variant="primary">Continue</Button>,
  },
  {
    label: "Secondary",
    button: <Button variant="secondary">Cancel</Button>,
  },
  {
    label: "Icon",
    button: (
      <Button
        variant="secondary"
        icon={<FiPlus aria-hidden="true" />}
        aria-label="Add item"
        title="Add item"
      />
    ),
  },
  {
    label: "Disabled",
    button: (
      <Button variant="primary" disabled>
        Unavailable
      </Button>
    ),
  },
  {
    label: "Loading",
    button: (
      <Button variant="primary" loading>
        Saving
      </Button>
    ),
  },
];

export default function Buttons() {
  return (
    <div className="buttons-showcase">
      {examples.map(({ label, button }) => (
        <div className="button-example" key={label}>
          <span className="button-example-label">{label}</span>
          {button}
        </div>
      ))}
    </div>
  );
}
