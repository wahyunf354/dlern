import PropTypes from "prop-types";
import { useContext, useState } from "react";
import Fade from "react-reveal/Fade";
import HeaderContext from "../../../contexts/HeaderContext";
import Button from "../../atom/Button";

const SesionTigaDua = ({
  question,
  handleClickAnswer,
  handleNextQuestions,
}) => {
  const { soal, jawaban } = question;
  const [answer, setAnswer] = useState([]);
  const { baseUrlAPI } = useContext(HeaderContext);

  const handleClick = (answer) => {
    if (answer.toUpperCase() == jawaban.toUpperCase()) {
      handleClickAnswer(true);
    } else {
      handleClickAnswer(false);
    }
  };

  const handleClickChoice = (choice) => {
    const tmpArr = answer;
    tmpArr.push(choice);
    setAnswer([...tmpArr]);
  };

  const handleRemoveChoice = (choice) => {
    const tmpArr = answer;
    const indexWillRemove = tmpArr.indexOf(choice);
    if (indexWillRemove !== -1) {
      tmpArr.splice(indexWillRemove, 1);
      setAnswer([...tmpArr]);
    }
  };

  const playAudio = async (url) => {
    console.log("play");
    const audio = new Audio(url);
    await audio.play();
  };

  const handleClickNext = () => {
    handleNextQuestions();
  };

  return (
    <Fade>
      {true ? (
        <div className="w-full h-40 flex justify-center items-center flex-col">
          <h1 className="text-2xl text-gray-700 mb-8">
            Lanjutkan Perjuanganmu
          </h1>
          <div>
            <Button
              isPrimary
              hasShadow
              hasRounded
              className="w-full"
              onClick={handleClickNext}
            >
              Lanjut
            </Button>
          </div>
        </div>
      ) : (
        <main className="container flex items-center flex-col mx-auto p-5 gap-3 relative">
          <h1 className="text-lg text-gray-900 font-light">
            Susun hingga menjadi kata yang sempurna!
          </h1>
          <div className="flex items-center">
            <Button
              onClick={() =>
                playAudio(`${baseUrlAPI}/assets/game/pertanyaan/${soal.voice}`)
              }
            >
              <img
                src="/assets/icons/speaker.svg"
                className="w-12 h-12 text-yellow"
              />
            </Button>
            <p className="text-2xl font-bold ml-4 text-gray-600">{soal.kata}</p>
          </div>
          <div className="w-full">
            <img
              src={soal.gambar}
              alt={soal.kata}
              className="object-contain h-20 mx-auto"
            />
          </div>
          <div className="p-2 mb-4 border h-44 md:h-28 md:w-1/2 w-full rounded-lg text-center">
            {answer.map((answer, i) => (
              <Button
                isSecondary
                hasShadow
                className="m-1 rounded-full ring-2 ring-gray-500 ring-opacity-50"
                key={i}
                onClick={() => handleRemoveChoice(answer)}
              >
                <p>{answer}</p>
              </Button>
            ))}
          </div>
          {/* TODO: Terdapat masalah ketika menjawab benar */}
          <div className="text-center h-44 md:h-28 md:w-1/2 w-full">
            {soal.huruf.map((choice, i) => {
              if (choice === "") return;
              return (
                <Button
                  isSecondary
                  hasShadow
                  className="rounded-full m-1 ring-2 ring-gray-500 ring-opacity-50"
                  key={i}
                  onClick={() => handleClickChoice(choice)}
                >
                  <p>{choice}</p>
                </Button>
              );
            })}
          </div>

          <div className="w-full md:w-1/2">
            <Button
              isPrimary
              hasShadow
              hasRounded
              className="w-full"
              onClick={() => handleClick(answer.join(""))}
            >
              Lanjut
            </Button>
          </div>
        </main>
      )}
    </Fade>
  );
};

SesionTigaDua.propTypes = {
  question: PropTypes.object,
  handleClickAnswer: PropTypes.func,
};

export default SesionTigaDua;
