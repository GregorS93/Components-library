import Badge from "./Badge.component";

const examples = [
  {
    label: "Default",
    hint: "Neutral label for a quiet status",
    badge: <Badge>Draft</Badge>,
  },
  {
    label: "Success",
    hint: "Something completed or live",
    badge: <Badge color="green">Published</Badge>,
  },
  {
    label: "Warning",
    hint: "Needs a look before moving on",
    badge: <Badge color="yellow">Pending</Badge>,
  },
  {
    label: "Error",
    hint: "The action did not go through",
    badge: <Badge color="red">Failed</Badge>,
  },
  {
    label: "Pill",
    hint: "Fully rounded, for a compact tag",
    badge: <Badge color="indigo" round>Beta</Badge>,
  },
  {
    label: "Count",
    hint: "A numeric marker on a round chip",
    badge: <Badge color="purple" round>12</Badge>,
  },
  {
    label: "New",
    hint: "Call out something just added",
    badge: <Badge color="pink" round>New</Badge>,
  },
];

export default function Badges() {
  return (
    <div className="badges-overlay">
      {examples.map(({ label, hint, badge }) => (
        <div className="badge-example" key={label}>
          <div className="badge-example-copy">
            <p className="badge-example-label">{label}</p>
            <p className="badge-example-hint">{hint}</p>
          </div>
          {badge}
        </div>
      ))}
    </div>
  );
}
