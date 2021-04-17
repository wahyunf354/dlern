import React from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";

function SesionSatuSatu({ question, handleClickAnswer }) {
  const { jawaban, soal } = question;
  const handleClick = (answer) => {
    if (answer.toUpperCase() == jawaban.toUpperCase()) {
      handleClickAnswer(true);
    } else {
      handleClickAnswer(false);
    }
  };

  console.log(Object.entries(soal.pilihan));

  return (
    <main className="container lg:w-1/2 mx-auto grid md:justify-items-center md:grid-cols-3 grid-cols-2 p-5 gap-3 relative">
      <h1 className="md:col-span-3 col-span-2 self-start text-xl py-5">
        {soal.pertanyaan}
      </h1>
      {Object.entries(soal.pilihan).map((answer, i) => (
        <Button
          className="p-2 border bg-green-900 text-white"
          key={i}
          hasRounded
          hasShadow
          onClick={() => handleClick(answer[0])}
        >
          <p className="py-2">{answer[1]}</p>
        </Button>
      ))}
    </main>
  );
}

SesionSatuSatu.propTypes = {
  question: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionSatuSatu;
