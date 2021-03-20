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
  return (
    <Fade>
      <main className="container flex items-center flex-col mx-auto p-5 gap-3 relative">
        <h1 className="text-xl">{soal.pertanyaan}</h1>
        {soal.pilihan.map((answer, i) => (
          <Button key={i} onClick={() => handleClick(answer)}>
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
