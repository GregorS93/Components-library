import { VscTriangleDown } from "react-icons/vsc";
import { FiArchive } from "react-icons/fi";
import clsx from "clsx";

const defaultText =
  "Lorem ipsum dolor sit amet consectetur adisiciping elit oluptatom tenetur";

export default function Tooltip({
  style = "light",
  icon = <FiArchive className="archive-icon" size={24} />,
  title = "Archive notes",
  text = defaultText,
}) {
  return (
    <div className={clsx("tooltip", `tooltip-${style}`)}>
      {icon}
      <div className="content-div">
        <div className="header">{title}</div>
        <div className="paragraph">{text}</div>
      </div>
      <button className={clsx("close-btn", `close-btn-${style}`)}>X</button>
      <VscTriangleDown className={clsx("polygon", `polygon-${style}`)} />
    </div>
  );
}
