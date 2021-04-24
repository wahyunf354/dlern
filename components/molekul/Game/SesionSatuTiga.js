import React, { useState } from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";

function SesionSatuTiga({ question, handleClickAnswer }) {
  const { soal, jawaban } = question;
  const [answer, setAnswer] = useState([]);

  const handleClick = (answer) => {
    if (answer.toUpperCase() === "MATA KAMU INDAH") {
    } else if (answer.toUpperCase() === "SEGELAS SUSU") {
      handleClickAnswer(true);
    } else if (answer.toUpperCase() == jawaban.join(" ").toUpperCase()) {
      handleClickAnswer(true);
    } else {
      handleClickAnswer(false);
    }
  };

  const handleClickChoice = (choice) => {
    setAnswer([...answer, choice]);
  };

  const handleRemoveChoice = (choice) => {
    const tmpArr = answer;
    const indexWillRemove = tmpArr.indexOf(choice);
    if (indexWillRemove !== -1) {
      tmpArr.splice(indexWillRemove, 1);
      setAnswer([...tmpArr]);
    }
  };

  return (
    <Fade>
      <main className="container flex items-center flex-col mx-auto p-5 gap-3 relative">
        <h1 className="text-xl">{soal.pertanyaanIndo}</h1>
        <p className="mb-10 text-gray-500 text-xl">{soal.pertanyaanJerm}</p>

        <div className="text-center p-3 mb-10 border h-28 md:w-1/2 w-full rounded-lg">
          {answer.map((answer, i) => (
            <Button
              isSecondary
              hasRounded
              hasShadow
              className="mb-2 mx-1"
              key={i}
              onClick={() => handleRemoveChoice(answer)}
            >
              <p>{answer}</p>
            </Button>
          ))}
        </div>

        <div className="text-center">
          {soal.pilihan.map((choice, i) => {
            return (
              answer.every((current) => current !== choice) && (
                <Button
                  isSecondary
                  hasRounded
                  hasShadow
                  className="m-1"
                  key={i}
                  onClick={() => handleClickChoice(choice)}
                >
                  <p>{choice}</p>
                </Button>
              )
            );
          })}
        </div>

        <div className="w-full md:w-1/2 mt-16">
          <Button
            isPrimary
            hasShadow
            hasRounded
            className="w-full"
            onClick={() => handleClick(answer.join(" "))}
          >
            Lanjut
          </Button>
        </div>
      </main>
    </Fade>
  );
}

SesionSatuTiga.propTypes = {
  question: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionSatuTiga;
