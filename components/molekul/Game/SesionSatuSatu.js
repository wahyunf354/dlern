import React from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";

function SesionSatuSatu({ soal, handleClickAnswer }) {
  const handleClick = (answer) => {
    if (answer.name.toUpperCase() == soal.jawaban.toUpperCase()) {
      handleClickAnswer(true);
    } else {
      handleClickAnswer(false);
    }
  };
  return (
    <main className="container lg:w-1/2 mx-auto grid md:justify-items-center md:grid-cols-3 grid-cols-2 p-5 gap-3 relative">
      <h1 className="md:col-span-3 col-span-2 self-start text-xl py-5">
        {soal.pertanyaan}
      </h1>
      {soal.pilihan.map((answer, i) => (
        <Button
          className="p-2 border"
          key={i}
          hasRounded
          hasShadow
          onClick={() => handleClick(answer)}
        >
          <img src={answer.imgUrl} />
          <p className="py-2">{answer.name}</p>
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
