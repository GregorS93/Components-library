import Toggle from "./Toggle.component";

const examples = [
  {
    label: "Off",
    hint: "Starts inactive",
    defaultOn: false,
  },
  {
    label: "On",
    hint: "Starts active",
    defaultOn: true,
  },
  {
    label: "Disabled",
    hint: "Cannot be changed",
    defaultOn: false,
    disabled: true,
  },
];

export default function Toggles() {
  return (
    <div className="toggles-overlay">
      {examples.map(({ label, hint, defaultOn, disabled }) => (
        <div className="toggle-row" key={label}>
          <div className="toggle-row-copy">
            <span className="toggle-row-label">{label}</span>
            <span className="toggle-row-hint">{hint}</span>
          </div>
          <Toggle defaultOn={defaultOn} disabled={disabled} label={label} />
        </div>
      ))}
    </div>
  );
}
