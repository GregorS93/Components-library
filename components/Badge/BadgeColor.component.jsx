import clsx from "clsx";

export default function BadgeColor({ color, roundEdge }) {
  const conditionalClass = clsx(color, roundEdge && "round");

  return <button className={conditionalClass}>Badge</button>;
}
