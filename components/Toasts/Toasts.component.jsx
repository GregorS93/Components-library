import { useState } from "react";
import { createPortal } from "react-dom";
import {
  FiAlertCircle,
  FiAlertTriangle,
  FiCheckCircle,
  FiInfo,
  FiLoader,
} from "react-icons/fi";
import Button from "../Button/Button.component";
import Toast from "./Toast.component";

const examples = [
  {
    id: "success",
    label: "Success",
    hint: "The action completed",
    title: "Saved",
    text: "Your work has been saved.",
    status: "success",
    icon: <FiCheckCircle />,
  },
  {
    id: "warning",
    label: "Warning",
    hint: "Something needs a look",
    title: "Unsaved changes",
    text: "Leave now and this draft will be lost.",
    status: "warning",
    icon: <FiAlertTriangle />,
  },
  {
    id: "error",
    label: "Error",
    hint: "The action did not go through",
    title: "Couldn’t publish",
    text: "Check your connection and try again.",
    status: "error",
    icon: <FiAlertCircle />,
  },
  {
    id: "info",
    label: "Info",
    hint: "A quiet update, not an alert",
    title: "New comment",
    text: "Jordan left a note on the cover frame.",
    status: "info",
    icon: <FiInfo />,
  },
  {
    id: "loading",
    label: "Loading",
    hint: "Work still in progress",
    title: "Publishing…",
    text: "This can take a few seconds.",
    status: "loading",
    icon: <FiLoader className="toast-spinner" />,
  },
];

export default function Toasts() {
  const [open, setOpen] = useState([]);

  function toggle(id) {
    setOpen((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  const visible = examples.filter((example) => open.includes(example.id));

  return (
    <>
      <div className="toasts-overlay">
        {examples.map((example) => {
          const showing = open.includes(example.id);

          return (
            <div className="toast-example" key={example.id}>
              <div className="toast-example-copy">
                <p className="toast-example-label">{example.label}</p>
                <p className="toast-example-hint">{example.hint}</p>
              </div>
              <Button
                variant={showing ? "secondary" : "primary"}
                onClick={() => toggle(example.id)}
              >
                {showing ? "Hide toast" : "Show toast"}
              </Button>
            </div>
          );
        })}
      </div>
      {visible.length > 0 &&
        createPortal(
          <div className="toast-stack">
            {visible.map((example) => (
              <Toast
                key={example.id}
                title={example.title}
                text={example.text}
                status={example.status}
                icon={example.icon}
                onClose={() => toggle(example.id)}
              />
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
