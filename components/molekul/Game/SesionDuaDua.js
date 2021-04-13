import React, { useContext } from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";
import HeaderContext from "../../../contexts/HeaderContext";

function SesionDuaDua({ question, handleClickAnswer }) {
  const { soal, jawaban } = question;
  const { baseUrlAPI } = useContext(HeaderContext);

  const handleClick = (answer) => {
    console.log(answer);
    console.log(jawaban);
    if (answer.toUpperCase() == jawaban.toUpperCase()) {
      handleClickAnswer(true);
    } else {
      handleClickAnswer(false);
    }
  };

  const playAudio = async (url) => {
    console.log("play");
    const audio = new Audio(url);
    await audio.play();
  };

  return (
    <Fade>
      <main className="container lg:w-1/2 lg:px-28 mx-auto flex flex-col items-center p-5  relative">
        <h1 className="col-span-2 text-2xl py-5">Terjemahkan kalimat ini. </h1>
        <div className="flex items-center">
          <Button onClick={() => playAudio(baseUrlAPI + soal.voice)}>
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
