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
    <main className="container lg:w-1/2 lg:px-28 mx-auto grid md:justify-items-center grid-cols-2 p-5 gap-3 relative">
      <h1 className="col-span-2 text-xl py-5">{soal.pertanyaan}</h1>
      {soal.pilihan.map((answer, i) => (
        <Button
          className="p-2 border lg:w-60 lg:h-60 md:h-30 md:w-30"
          key={i}
          hasRounded
          hasShadow
          onClick={() => handleClick(answer)}
        >
          <img src={answer} />
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
