import Tabs from "./Tabs.component";

export default function TabsExamples() {
  return (
    <div className="tabs-overlay">
      <div className="tabs-example">
        <div className="tabs-example-copy">
          <p className="tabs-example-label">Default</p>
          <p className="tabs-example-hint">
            Switch content without leaving the page
          </p>
        </div>
        <Tabs defaultValue="overview">
          <Tabs.List label="Project">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="files">Files</Tabs.Tab>
            <Tabs.Tab value="activity">Activity</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="overview">
            Aurora is a shared workspace for the design team. Notes, files,
            and the latest publish live here.
          </Tabs.Panel>
          <Tabs.Panel value="files">
            12 files in this project, including the brand kit and last week’s
            prototype export.
          </Tabs.Panel>
          <Tabs.Panel value="activity">
            Maya published 2 hours ago. Jordan left a comment on the cover
            frame.
          </Tabs.Panel>
        </Tabs>
      </div>

      <div className="tabs-example">
        <div className="tabs-example-copy">
          <p className="tabs-example-label">Disabled</p>
          <p className="tabs-example-hint">
            Same control, with one tab unavailable
          </p>
        </div>
        <Tabs defaultValue="profile">
          <Tabs.List label="Account">
            <Tabs.Tab value="profile">Profile</Tabs.Tab>
            <Tabs.Tab value="billing" disabled>
              Billing
            </Tabs.Tab>
            <Tabs.Tab value="team">Team</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="profile">
            Your name and avatar are shown on comments and published work.
          </Tabs.Panel>
          <Tabs.Panel value="billing">
            Billing is managed by the workspace owner.
          </Tabs.Panel>
          <Tabs.Panel value="team">
            Four people have access. Invites are sent by email.
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
}
