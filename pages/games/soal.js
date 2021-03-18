import React from "react";
import { useRouter } from "next/router";

const Soal = () => {
  const level = useRouter().query.level;

  return <>Hello - {level} </>;
};

export default Soal;
