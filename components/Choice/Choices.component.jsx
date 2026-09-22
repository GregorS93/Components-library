import Checkbox from "./Checkbox.component";
import Radio from "./Radio.component";
import Segmented from "./Segmented.component";

export default function Choices() {
  return (
    <div className="choices-overlay">
      <div className="choice-block">
        <div className="choice-block-copy">
          <span className="choice-block-label">Checkbox</span>
          <span className="choice-block-hint">Pick any combination</span>
        </div>
        <div className="choice-group">
          <Checkbox label="Email" defaultChecked />
          <Checkbox label="Push" defaultChecked />
          <Checkbox label="SMS" disabled />
        </div>
      </div>

      <div className="choice-block">
        <div className="choice-block-copy">
          <span className="choice-block-label">Radio</span>
          <span className="choice-block-hint">Pick one option</span>
        </div>
        <Radio
          name="plan"
          defaultValue="monthly"
          options={[
            { value: "weekly", label: "Weekly" },
            { value: "monthly", label: "Monthly" },
            { value: "yearly", label: "Yearly" },
          ]}
        />
      </div>

      <div className="choice-block">
        <div className="choice-block-copy">
          <span className="choice-block-label">Segmented</span>
          <span className="choice-block-hint">Switch the view</span>
        </div>
        <Segmented
          defaultValue="week"
          options={[
            { value: "day", label: "Day" },
            { value: "week", label: "Week" },
            { value: "month", label: "Month" },
          ]}
        />
      </div>
    </div>
  );
}
