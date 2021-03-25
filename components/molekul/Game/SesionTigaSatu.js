import React from "react";
import propTypes from "prop-types";
import Button from "../../atom/Button";
import Fade from "react-reveal";
import Image from "next/image";

function SesionDuaDua({ question, handleClickAnswer, handleNextQuestions }) {
  const { soal, jawaban } = question;

  const handleClick = (answer) => {
    // if (answer.toUpperCase() == jawaban.toUpperCase()) {
    //   handleClickAnswer(true);
    // } else {
    //   handleClickAnswer(false);
    // }
    handleNextQuestions();
  };

  return (
    <Fade>
      <main className="container w-screen lg:w-1/2 lg:px-28 mx-auto flex flex-col items-center p-5 relative">
        {true ? (
          <div className="w-full h-40 flex justify-center items-center">
            <h1 className="text-2xl text-gray-700">Semangat terus ya!!</h1>
          </div>
        ) : (
          <>
            <h1 className="col-span-2 text-xl py-5">
              Pindahkan kata ke jawaban yang benar.
            </h1>
            <div className="grid grid-cols-2 gap-4 mb-10">
              {soal.gambar.map((e) => (
                <div className="w-32 border rounded">
                  <div className="w-full p-2">
                    <img src={e} />
                  </div>
                  <div className="h-6 mt-2 w-full border-t text-center"></div>
                </div>
              ))}
            </div>
          </>
        )}
        <Button onClick={handleClick} hasShadow hasRounded isPrimary>
          Lanjut
        </Button>
      </main>
    </Fade>
  );
}

SesionDuaDua.propTypes = {
  question: propTypes.object.isRequired,
  handleClickAnswer: propTypes.func,
};

export default SesionDuaDua;
