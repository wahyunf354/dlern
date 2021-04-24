import React from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";

function SesionDuaTiga({ question, handleClickAnswer }) {
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
        <p className="text-xl ml-4 text-gray-700">{soal.pertanyaan}</p>
        <div className="flex flex-col items-center flex-wrap mt-10">
          {Object.entries(soal.pilihan).map((e, i) => (
            <Button
              key={i}
              isPrimary
              hasShadow
              hasRounded
              className="m-2"
              onClick={() => handleClick(e[0])}
            >
              {e[1]}
            </Button>
          ))}
        </div>
      </main>
    </Fade>
  );
}

SesionDuaTiga.propTypes = {
  question: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionDuaTiga;
