import Accordion from "./Accordion.component";

export default function Accordions() {
  return (
    <div className="accordions-overlay">
      <div className="accordion-example">
        <div className="accordion-example-copy">
          <p className="accordion-example-label">Single</p>
          <p className="accordion-example-hint">
            One panel open at a time
          </p>
        </div>
        <Accordion type="single" defaultValue="shipping">
          <Accordion.Item value="shipping">
            <Accordion.Header>Shipping</Accordion.Header>
            <Accordion.Panel>
              Arrives in 2–4 business days for most orders. Overnight is
              available at checkout.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="returns">
            <Accordion.Header>Returns</Accordion.Header>
            <Accordion.Panel>
              Send it back within 30 days, unused and in the original box.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="care">
            <Accordion.Header>Care</Accordion.Header>
            <Accordion.Panel>
              Wipe with a dry cloth. Avoid solvents and long stretches in
              direct sun.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>

      <div className="accordion-example">
        <div className="accordion-example-copy">
          <p className="accordion-example-label">Multiple</p>
          <p className="accordion-example-hint">
            Any combination of panels can stay open
          </p>
        </div>
        <Accordion type="multiple" defaultValue={["editor", "privacy"]}>
          <Accordion.Item value="editor">
            <Accordion.Header>Editor</Accordion.Header>
            <Accordion.Panel>
              Autosave is on. Drafts stay on this device until you publish.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="alerts">
            <Accordion.Header>Alerts</Accordion.Header>
            <Accordion.Panel>
              Mentions and replies send a notification. Marketing mail is off.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="privacy">
            <Accordion.Header>Privacy</Accordion.Header>
            <Accordion.Panel>
              The workspace is invite-only. Link sharing is turned off.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
