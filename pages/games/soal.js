import React, { useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import soal from "../../data-soal";
import PopupCorrect from "../../components/molekul/Game/PopupCorrect";
import PopupWrong from "../../components/molekul/Game/PopupWrong";
import SesionSatuSatu from "../../components/molekul/Game/SesionSatuSatu";
import SesionSatuDua from "../../components/molekul/Game/SesionSatuDua";

const FinistGame = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-60 h-36 bg-yellow rounded-lg shadow-lg flex">END</div>
    </div>
  );
};

const Soal = () => {
  const [currectQuestion, setCurrentQuestion] = useState(0);
  const [coin, setCoin] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isShowFinist, setIsShowFinist] = useState(false);
  const level = useRouter().query.level;
  const soalme = soal.data.filter((e) => e.level == level)[0].soals;
  console.log(soalme);

  const handleClickAnswer = (answer) => {
    if (answer) {
      setIsCorrect(true);
      setCoin(coin + 1);
    } else {
      setIsWrong(true);
    }
  };

  const handleNextQuestions = () => {
    const nextQuestion = currectQuestion + 1;
    if (nextQuestion < soalme.length) {
      setCurrentQuestion(nextQuestion);
      setIsWrong(false);
      setIsCorrect(false);
    } else {
      setIsShowFinist(true);
    }
  };

  return (
    <Layout className="h-screen" title={`Games | Level ${level}`}>
      {isShowFinist ? (
        <FinistGame />
      ) : (
        <>
          <Header isBack href="/games" />
          {isCorrect && <PopupCorrect handleClickNext={handleNextQuestions} />}
          {isWrong && <PopupWrong handleClickNext={handleNextQuestions} />}
          {soalme[currectQuestion].type == "s11" && (
            <SesionSatuSatu
              soal={soalme[currectQuestion].soal}
              handleClickAnswer={handleClickAnswer}
            />
          )}
          {soalme[currectQuestion].type == "s12" && (
            <SesionSatuDua
              soal={soalme[currectQuestion].soal}
              handleClickAnswer={handleClickAnswer}
            />
          )}
        </>
      )}
    </Layout>
  );
};

export default Soal;
