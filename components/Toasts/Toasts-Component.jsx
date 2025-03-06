import { useState } from "react";
import Toast from "./Toast-Component";

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
          icons="./components/Toasts/icons/success.png"
        />
      )}
      <br />
      <br />
    </>
  );
}
