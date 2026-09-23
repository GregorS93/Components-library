import { FiCopy, FiEdit3, FiLink, FiTrash2 } from "react-icons/fi";
import Button from "../Button/Button.component";
import Menu from "./Menu.component";
import Popover from "./Popover.component";

const actions = [
  { label: "Rename", icon: <FiEdit3 aria-hidden="true" /> },
  { label: "Duplicate", icon: <FiCopy aria-hidden="true" /> },
  {
    label: "Delete",
    icon: <FiTrash2 aria-hidden="true" />,
    danger: true,
  },
];

export default function Popovers() {
  return (
    <div className="popovers-overlay">
      <div className="popover-example">
        <div className="popover-example-copy">
          <span className="popover-example-label">Menu</span>
          <span className="popover-example-hint">
            Click for a list of actions
          </span>
        </div>
        <Menu label="Actions" items={actions} defaultOpen />
      </div>

      <div className="popover-example">
        <div className="popover-example-copy">
          <span className="popover-example-label">Popover</span>
          <span className="popover-example-hint">
            Click for a content panel, not a hover tooltip
          </span>
        </div>
        <Popover label="Share">
          {({ close }) => (
            <div className="popover-card">
              <p className="popover-card-title">Share this board</p>
              <p className="popover-card-body">
                Anyone with the link can view. It stays put until you click
                away, press Escape, or copy the link.
              </p>
              <Button
                icon={<FiLink aria-hidden="true" />}
                onClick={close}
              >
                Copy link
              </Button>
            </div>
          )}
        </Popover>
      </div>
    </div>
  );
}
