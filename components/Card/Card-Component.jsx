import { useState } from "react";
import Icon from "./Icon-Component";
import { IoCloudUploadOutline } from "react-icons/io5";

export default function Card() {
  const [color, setColor] = useState("#3F75FE");

  return (
    <div className="card">
      <Icon
        icon={<IoCloudUploadOutline className="first-icon" />}
        backgroundColor={color}
      />
      <label htmlFor="colorPicker" className="color-picker-label">
        Change icon color
      </label>
      <input
        type="color"
        id="colorPicker"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="color-picker"
      />
      <h3>Easy Deployment</h3>
      <p>
        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
        sit morbi lobortis.
      </p>
    </div>
  );
}
