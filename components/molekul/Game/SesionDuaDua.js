import React, { useContext, useEffect } from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";
import HeaderContext from "../../../contexts/HeaderContext";

function SesionDuaDua({ question, handleClickAnswer, isTigaTiga }) {
  const { soal, jawaban } = question;
  const { baseUrlAPI } = useContext(HeaderContext);

  const handleClick = (answer) => {
    if (answer.toUpperCase() == jawaban.toUpperCase()) {
      handleClickAnswer(true);
    } else {
      handleClickAnswer(false);
    }
  };

  const playAudio = async (files) => {
    files.forEach(async (e, i) => {
      const url = `${baseUrlAPI}/assets/game/pertanyaan/${e}`;
      console.log("play");
      if (i > 0) {
        setTimeout(async () => {
          const audio = new Audio(url);
          await audio.play();
        }, 1000);
      } else {
        const audio = new Audio(url);
        await audio.play();
      }
    });
  };

  return (
    <Fade>
      <main className="container lg:w-1/2 lg:px-28 mx-auto flex flex-col items-center p-5  relative">
        {isTigaTiga ? (
          <h1 className="col-span-2 text-2xl py-5">Pilih kata yang hilang</h1>
        ) : (
          <h1 className="col-span-2 text-2xl py-5">
            Terjemahkan kalimat ini.{" "}
          </h1>
        )}
        <div className="flex items-center">
          <Button onClick={() => playAudio(soal.voice)}>
            <img
              src="/assets/icons/speaker.svg"
              className="w-20 h-20 text-yellow"
            />
          </Button>
          {/* <p className="text-lg font-ligth ml-4 text-gray-400">
            {soal.pertanyaanIndo}
          </p> */}
        </div>
        <p className="text-xl font-bold mt-10 text-gray-800">
          {soal.pertanyaanJerman}
        </p>
        <div className="flex justify-center flex-wrap mt-10">
          {Object.entries(soal.pilihan).map((e, index) => (
            <Button
              key={index}
              isPrimary
              hasShadow
              hasRounded
              className="m-2"
              onClick={() => handleClick(e[0])}
            >
              {e[1]}
            </Button>
          ))}
        </div>
      </main>
    </Fade>
  );
}

SesionDuaDua.propTypes = {
  question: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionDuaDua;
