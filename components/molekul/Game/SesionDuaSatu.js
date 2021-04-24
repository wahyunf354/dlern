import React, { useContext, useState } from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";
import InputText from "../../../components/atom/InputText";
import HeaderContext from "../../../contexts/HeaderContext";

function SesionDuaSatu({ question, handleClickAnswer }) {
  const { soal, jawaban } = question;
  const [answare, setAnsware] = useState("");
  const { baseUrlAPI } = useContext(HeaderContext);

  const time = setTimeout(async () => {
    console.log("play");
    const audio = new Audio(
      `${baseUrlAPI}/assets/game/pertanyaan/${soal.voice}`
    );
    await audio.play();
  }, 500);

  const handleClick = (answer) => {
    if (answer.toUpperCase() == jawaban.toUpperCase()) {
      handleClickAnswer(true);
      setAnsware("");
    } else {
      handleClickAnswer(false);
      setAnsware("");
    }
  };

  const playAudio = async (url) => {
    console.log("play");
    const audio = new Audio(url);
    await audio.play();
    clearTimeout(time);
  };

  return (
    <Fade>
      <main className="container lg:w-1/2 lg:px-28 mx-auto flex flex-col items-center p-5  relative">
        <h1 className="col-span-2 text-xl py-5">{soal.pertanyaan}</h1>
        <Button
          onClick={() =>
            playAudio(`${baseUrlAPI}/assets/game/pertanyaan/${soal.voice}`)
          }
        >
          <img
            src="/assets/icons/speaker.svg"
            className="w-30 h-30 text-yellow"
          />
        </Button>
        <InputText
          value={answare}
          name="answare"
          outerClassName="mt-10"
          placeholder="Masukan jawaban kamu?"
          isOffAutoComplete
          onChange={(e) => setAnsware(e.target.value)}
        />
        <Button
          isPrimary
          hasShadow
          hasRounded
          onClick={() => handleClick(answare)}
        >
          Lanjut
        </Button>
      </main>
    </Fade>
  );
}

SesionDuaSatu.propTypes = {
  question: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionDuaSatu;
