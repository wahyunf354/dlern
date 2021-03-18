import React from "react";
import { useRouter } from "next/router";

function Soal() {
  const router = useRouter();

  const { pid } = router.query;

  return <>Hello - {pid}</>;
}

export default Soal;
