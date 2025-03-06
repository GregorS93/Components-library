import React from "react";
import BadgeColor from "./BadgeColor-Component";

export default function Badge({ roundEdge }) {
  const colors = [
    "green",
    "blue",
    "grey",
    "red",
    "yellow",
    "indigo",
    "purple",
    "pink",
  ];
  const randomColor = Math.floor(Math.random() * colors.length);

  return <BadgeColor color={colors[randomColor]} roundEdge={roundEdge} />;
}
