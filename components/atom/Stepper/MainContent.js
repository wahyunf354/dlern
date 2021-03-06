import React from "react";
import Fade from "react-reveal/Fade";

function MainContent({ data, current }) {
  return <Fade>{data[current] && data[current].content}</Fade>;
}

export default MainContent;
