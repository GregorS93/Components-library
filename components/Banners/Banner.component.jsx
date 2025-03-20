import clsx from "clsx";

export default function Banner({ title, text, status, icons }) {
  const titleClass = clsx(
    status === "Success" && "success-div",
    status === "Warning" && "warning-div",
    status === "Error" && "error-div",
    status === "Neutral" && "neutral-div"
  );

  const pClass = clsx(
    status === "Success" && "success-p",
    status === "Warning" && "warning-p",
    status === "Error" && "error-p",
    status === "Neutral" && "neutral-p"
  );

  const containerClass = clsx(
    "container",
    status === "Success" && "success",
    status === "Warning" && "warning",
    status === "Error" && "error",
    status === "Neutral" && "neutral"
  );

  return (
    <>
      <div className={containerClass}>
        <img src={icons} />
        <div>
          <div className={titleClass}>{title}</div>
          <p className={pClass}>{text}</p>
        </div>
      </div>
    </>
  );
}
