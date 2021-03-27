import React from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";

function SesionEmpatSatu({ question, handleClickAnswer }) {
  const { soal, jawaban } = question;

  const handleClick = (answer) => {
    if (answer.toUpperCase() == jawaban.toUpperCase()) {
      handleClickAnswer(true);
    } else {
      handleClickAnswer(false);
    }
  };

  return (
    <Fade>
      <main className="container lg:w-1/2 lg:px-28 mx-auto flex flex-col items-center p-5  relative">
        <h1 className="col-span-2 font-ligth text-lg text-gray-400 py-5">
          {soal.pertanyaan}
        </h1>
        <div>
          <img src={soal.gambar} className="w-32" alt={soal.pertanyaan} />
        </div>
        <div className="mt-10">
          {soal.pilihan.map((e, i) => (
            <Button
              key={i}
              isPrimary
              hasShadow
              hasRounded
              className="m-2 w-full font-bold"
              onClick={() => handleClick(e)}
            >
              {e}
            </Button>
          ))}
        </div>
      </main>
    </Fade>
  );
}

SesionEmpatSatu.propTypes = {
  question: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionEmpatSatu;
