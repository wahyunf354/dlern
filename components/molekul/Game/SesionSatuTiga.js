import React, { useState } from "react";
import InputText from "../../atom/InputText";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";

function SesionSatuTiga({ soal, handleClickAnswer }) {
  const [answer, setAnswer] = useState([]);

  const handleClick = (answer) => {
    if (answer == soal.jawaban) {
      handleClickAnswer(true);
    } else {
      handleClickAnswer(false);
    }
  };

  const handleClickChoice = (choice) => {
    setAnswer([...answer, choice]);
  };

  return (
    <Fade>
      <main className="container flex items-center flex-col mx-auto p-5 gap-3 relative">
        <h1 className="text-xl">Tulis dalam Bahasa Indonesia</h1>
        <p className="mb-10 text-gray-500 text-xl">{soal.pertanyaan}</p>
        <InputText
          value={answer.join(" ")}
          placeholder=""
          outerClassName="w-10/12 md:w-1/3 mb-24"
          inputClassName="w-full"
        />
        <div className="text-center">
          {soal.pilihan.map((answer, i) => (
            <Button
              isPrimary
              hasRounded
              hasShadow
              className="m-2"
              key={i}
              onClick={() => handleClickChoice(answer)}
            >
              <p>{answer}</p>
            </Button>
          ))}
        </div>
      </main>
    </Fade>
  );
}

SesionSatuTiga.propTypes = {
  soal: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionSatuTiga;
