import React from "react";
import Fade from "react-reveal/Fade";

function Meta({ data, current }) {
  return (
    <Fade>
      <div className="text-center mt-10" style={{ marginBottom: 30 }}>
        <h1 className="text-4xl font-bold mb-2">
          {" "}
          {data[current] && data[current].title}
        </h1>
        <p className="text-gray-400 text-sm">
          {data[current] && data[current].description}
        </p>
      </div>
    </Fade>
  );
}

export default Meta;
