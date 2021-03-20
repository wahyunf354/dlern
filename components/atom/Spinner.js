import React from "react";
import propTypes from "prop-types";

function Spinner({ isMedium, isCenter, isGreen, isYellow }) {
  const className = ["loader", "rounded-full", "border-4"];
  if (isMedium) className.push("w-10 h-10");
  if (isCenter) className.push("mx-auto");
  if (isGreen) className.push("border-green-900");
  if (isYellow) className.push("border-yellow");
  return <div className={className.join(" ")}></div>;
}

Spinner.propTypes = {
  isMedium: propTypes.bool,
  isCenter: propTypes.bool,
  isGreen: propTypes.bool,
  isYellow: propTypes.bool,
};

export default Spinner;
