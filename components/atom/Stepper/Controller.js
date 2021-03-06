import React from "react";
import Fade from "react-reveal/Fade";

function Controller({ children }) {
  return (
    <Fade>
      <div className="w-full flex flex-col justify-items-auto items-center">
        {children}
      </div>
    </Fade>
  );
}

export default Controller;
