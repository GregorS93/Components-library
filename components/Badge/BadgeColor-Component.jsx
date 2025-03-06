import React from "react";
import Badge from "./Badge-Component";
import clsx from "clsx";

export default function BadgeColor({ color, roundEdge }) {
  const conditionalClass = clsx(color, roundEdge && "round");

  return <button className={conditionalClass}>Badge</button>;
}
