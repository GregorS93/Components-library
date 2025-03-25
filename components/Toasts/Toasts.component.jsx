import { useState } from "react";
import Toast from "./Toast.component";
import icons from "./icons/success.png";

export default function Toasts() {
  const [showToast, setShowToast] = useState(false);

  function toggleState() {
    setShowToast((prevToast) => !prevToast);
  }

  return (
    <>
      <br />
      <br />
      <button onClick={toggleState}>Toggle toast</button>
      {showToast && (
        <Toast
          title="Congratulations!"
          text="Your work has been saved."
          status="Success"
          icons={icons}
        />
      )}
      <br />
      <br />
    </>
  );
}
