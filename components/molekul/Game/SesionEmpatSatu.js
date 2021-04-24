import React, { useContext } from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";
import HeaderContext from "../../../contexts/HeaderContext";

function SesionEmpatSatu({ question, handleClickAnswer }) {
  const { soal, jawaban } = question;
  const { baseUrlAPI } = useContext(HeaderContext);

  const handleClick = (answer) => {
    if (jawaban == "") {
      handleClickAnswer(true);
    } else if (answer.toUpperCase() == jawaban.toUpperCase()) {
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
          <img
            src={baseUrlAPI + soal.gambar}
            className="w-32"
            alt={soal.pertanyaan}
          />
        </div>
        <div className="mt-10">
          {Object.entries(soal.pilihan).map((e, i) => (
            <Button
              key={i}
              isPrimary
              hasShadow
              hasRounded
              className="m-2 w-full font-bold"
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

SesionEmpatSatu.propTypes = {
  question: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionEmpatSatu;
