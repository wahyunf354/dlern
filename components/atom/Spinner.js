import React from "react";
import propTypes from "prop-types";

function Spinner({ isMedium, isSmall, isCenter, isGreen, isYellow, isWhite }) {
  const className = ["loader", "rounded-full", "border-4"];
  if (isMedium) className.push("w-10 h-10");
  if (isSmall) className.push("w-8 h-8");
  if (isCenter) className.push("mx-auto");
  if (isGreen) className.push("border-green-900");
  if (isYellow) className.push("border-yellow");
  if (isWhite) className.push("border-white");
  return <div className={className.join(" ")}></div>;
}

Spinner.propTypes = {
  isMedium: propTypes.bool,
  isCenter: propTypes.bool,
  isGreen: propTypes.bool,
  isYellow: propTypes.bool,
  isWhite: propTypes.bool,
  isSmall: propTypes.bool,
};

export default Spinner;
