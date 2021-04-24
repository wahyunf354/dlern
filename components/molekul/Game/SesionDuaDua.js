import React, { useContext } from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";
import HeaderContext from "../../../contexts/HeaderContext";

function SesionDuaDua({ question, handleClickAnswer, isTigaTiga }) {
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

  const time = setTimeout(async () => {
    console.log("play");
    const audio = new Audio(
      `${baseUrlAPI}/assets/game/pertanyaan/${soal.voice}`
    );
    await audio.play();
  }, 3000);

  const playAudio = async (url) => {
    console.log("play");
    const audio = new Audio(url);
    await audio.play();
    clearTimeout(time);
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
          <Button
            onClick={() =>
              playAudio(`${baseUrlAPI}/assets/game/pertanyaan/${soal.voice}`)
            }
          >
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
