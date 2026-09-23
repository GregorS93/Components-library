import { FiAlertTriangle, FiCheckCircle } from "react-icons/fi";
import Tooltip from "./Tooltip.component";

export default function Tooltips() {
  return (
    <div className="tooltips-grid">
      <div className="tooltips-column">
        <Tooltip style="light" />
        <Tooltip style="dark" />
      </div>
      <div className="tooltips-column">
        <Tooltip
          style="success"
          icon={<FiCheckCircle className="archive-icon" size={24} />}
          title="Copied to clipboard"
          text="Anyone with this link can view the board and leave a comment."
        />
        <Tooltip
          style="warning"
          icon={<FiAlertTriangle className="archive-icon" size={24} />}
          title="Unsaved changes"
          text="Leave now and this draft of your notes will be lost."
        />
      </div>
    </div>
  );
}
