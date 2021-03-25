import React from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";

function SesionDuaDua({ question, handleClickAnswer }) {
  const { soal, jawaban } = question;

  const handleClick = (answer) => {
    console.log(answer);
    console.log(jawaban);
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
          Pilihlah arti yang benar!
        </h1>
        <p className="text-xl ml-4 text-gray-600">"{soal.pertanyaan}"</p>
        <div className="flex flex-col items-center flex-wrap mt-10">
          {soal.pilihan.map((e) => (
            <Button
              isPrimary
              hasShadow
              hasRounded
              className="m-2"
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

SesionDuaDua.propTypes = {
  question: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionDuaDua;
