import React from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";

function SesionSatuSatu({ soal, handleClickAnswer }) {
  const handleClick = (answer) => {
    if (answer == soal.jawaban) {
      handleClickAnswer(true);
    } else {
      handleClickAnswer(false);
    }
  };
  return (
    <main className="container mx-auto grid grid-cols-2 p-5 gap-3 relative">
      <h1 className="col-span-2 text-xl py-5">{soal.pertanyaan}</h1>
      {soal.pilihan.map((answer, i) => (
        <Button
          className="p-2 border"
          key={i}
          hasRounded
          hasShadow
          onClick={() => handleClick(answer)}
        >
          <img src={answer} width="512" height="512" />
        </Button>
      ))}
    </main>
  );
}

SesionSatuSatu.propTypes = {
  soal: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionSatuSatu;
