import React from "react";

function Spinner() {
  const className = ["loader", "rounded-full", "border-4"];
  
  return (
    <div className="w-10 h-10 mx-auto border-4 border-green-900 rounded-full loader"></div>
  );
}

export default Spinner;
