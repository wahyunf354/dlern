import React from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";

function SesionSatuSatu({ soal, handleClickAnswer }) {
  const handleClick = (answer) => {
    if (answer == soal.jawaban) {
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
        <h1 className="text-xl">
          Dengarkan audio dan pilih pernyataan yang tepat.
        </h1>
        <Button onClick={() => playAudio(soal.pertanyaan.audio)}>
          <img
            src="/assets/icons/speaker.svg"
            className="w-30 h-30 text-yellow"
          />
        </Button>
        <p className="mb-10 text-gray-500 text-xl">{soal.pertanyaan.kata}</p>
        {soal.pilihan.map((answer, i) => (
          <Button
            isPrimary
            hasRounded
            hasShadow
            className="w-60"
            key={i}
            onClick={() => handleClick(answer)}
          >
            <p>{answer}</p>
          </Button>
        ))}
      </main>
    </Fade>
  );
}

SesionSatuSatu.propTypes = {
  soal: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionSatuSatu;
