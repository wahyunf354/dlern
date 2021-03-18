import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import soal from "../../data-soal";
import Button from "../../components/atom/Button";

const Soal = () => {
  const [currectQuestion, setCurrentQuestion] = useState(0);
  const [coin, setCoin] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const level = useRouter().query.level;
  const soalme = soal.data.filter((e) => e.level == level)[0].soals;
  console.log(soalme);

  const handleClickAnswer = (answer) => {
    if (answer == soalme[currectQuestion].soal.jawaban) {
      setIsCorrect(true);
      setCoin(coin + 1);
    }
  };

  return (
    <Layout title={`Games | Level ${level}`}>
      <Header isBack href="/games" />
      <main className="grid grid-cols-2 relative">
        <div className="absolute inset-0 bg-red-500"></div>
        <h1 className="col-span-2">
          {soalme[currectQuestion].soal.pertanyaan}
        </h1>
        {soalme[currectQuestion].soal.pilihan.map((answer) => (
          <Button hasRounded onClick={() => handleClickAnswer(answer)}>
            <img src={answer} width="512" height="512" />
          </Button>
        ))}
      </main>
    </Layout>
  );
};

export default Soal;
