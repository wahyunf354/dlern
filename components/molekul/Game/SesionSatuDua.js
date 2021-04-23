import React, { useContext } from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";
import HeaderContext from "../../../contexts/HeaderContext";

function SesionSatuSatu({ question, handleClickAnswer }) {
  const { soal, jawaban } = question;
  const { baseUrlAPI } = useContext(HeaderContext);
  const handleClick = (answer) => {
    if (answer.toUpperCase() == jawaban.toUpperCase()) {
      handleClickAnswer(true);
    } else {
      handleClickAnswer(false);
    }
  };
  const playAudio = async (url) => {
    const audio = new Audio(url);
    await audio.play();
  };
  return (
    <Fade>
      <main className="container flex items-center flex-col mx-auto p-5 gap-3 relative">
        <h1 className="text-xl">{soal.pertanyaan}</h1>
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
        {Object.entries(soal.pilihan).map((answer, i) => (
          <Button
            isPrimary
            hasRounded
            hasShadow
            className="w-60"
            key={i}
            onClick={() => handleClick(answer[0])}
          >
            <p>{answer[1]}</p>
          </Button>
        ))}
      </main>
    </Fade>
  );
}

SesionSatuSatu.propTypes = {
  question: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionSatuSatu;
