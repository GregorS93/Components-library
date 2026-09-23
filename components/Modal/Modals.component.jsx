import { useState } from "react";
import Button from "../Button/Button.component";
import Modal from "./Modal.component";

function ConfirmExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="modal-example">
      <div className="modal-example-copy">
        <span className="modal-example-label">Confirm</span>
        <span className="modal-example-hint">
          Blocking overlay with cancel and confirm
        </span>
      </div>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Modal
        open={open}
        title="Publish changes"
        confirmLabel="Publish"
        cancelLabel="Cancel"
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        This will make the latest version live for everyone on the team.
      </Modal>
    </div>
  );
}

function DestructiveExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="modal-example">
      <div className="modal-example-copy">
        <span className="modal-example-label">Destructive</span>
        <span className="modal-example-hint">
          Same dialog, used for an irreversible action
        </span>
      </div>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Delete project
      </Button>
      <Modal
        open={open}
        title="Delete this project?"
        confirmLabel="Delete"
        cancelLabel="Keep it"
        danger
        onConfirm={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        This cannot be undone. Files, comments, and history will be removed.
      </Modal>
    </div>
  );
}

export default function Modals() {
  return (
    <div className="modals-overlay">
      <ConfirmExample />
      <DestructiveExample />
    </div>
  );
}
