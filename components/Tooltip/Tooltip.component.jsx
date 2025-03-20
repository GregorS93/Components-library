import { VscTriangleDown } from "react-icons/vsc";
import { FiArchive } from "react-icons/fi";
import clsx from "clsx";

export default function Tooltip({ style }) {
  const lightOrDark = clsx("tooltip", {
    "tooltip-dark": style === "dark",
    "tooltip-light": style === "light",
  });

  const lOrdBtn = clsx("close-btn", {
    "close-btn-dark": style === "dark",
    "close-btn-light": style === "light",
  });

  const lOrdPolygon = clsx("polygon", {
    "polygon-dark": style === "dark",
    "polygon-light": style === "light",
  });

  return (
    <div className={lightOrDark}>
      <FiArchive className="archive-icon" size={24} />
      <div className="content-div">
        <div className="header">Archive notes</div>
        <div className="paragraph">
          Lorem ipsum dolor sit amet consectetur adisiciping elit oluptatom
          tenetur
        </div>
      </div>
      <button className={lOrdBtn}>X</button>
      <VscTriangleDown className={lOrdPolygon} />
    </div>
  );
}
