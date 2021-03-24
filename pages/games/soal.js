import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import PopupCorrect from "../../components/molekul/Game/PopupCorrect";
import PopupWrong from "../../components/molekul/Game/PopupWrong";
import SesionSatuSatu from "../../components/molekul/Game/SesionSatuSatu";
import Button from "../../components/atom/Button";
import SesionSatuTiga from "../../components/molekul/Game/SesionSatuTiga";

import SesionSatuDua from "../../components/molekul/Game/SesionSatuDua";
import firebase from "../../config/firebase";
import Spinner from "../../components/atom/Spinner";

const FinistGame = ({ coin }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div 	
				className="w-60 h-36 bg-yellow rounded-lg shadow-lg flex justify-center items-center"
		>
				<h1 className="text-white font-bold text-4xl"> {coin} </h1>
				<Button>
					Lanjut
				</Button>
				<Button>Home</Button>
				<Button>Ulang</Button>
			</div>
    </div>
  );
};

const Soal = () => {
  const [currectQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSoals, setCurrentSoals] = useState([]);
  const [coin, setCoin] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isShowFinist, setIsShowFinist] = useState(false);
  const level = useRouter().query.level;

  useEffect(() => {
    if (level)
      firebase
        .firestore()
        .collection("soals")
        .where("level", "==", parseInt(level))
        .get()
        .then((result) => {
          result.forEach((doc) => {
            setCurrentSoals(doc.data().soals);
          });
          setIsLoading(false);
        })
        .catch((err) => {
          console.log("error getting documents", err);
        });
  }, [level]);

  const handleClickAnswer = (answer) => {
    if (answer) {
      setIsCorrect(true);
      setCoin(coin + 1);
    } else {
      setIsWrong(true);
    }
  };

  const handleNextQuestions = () => {
    const nextQuestion = currectQuestion + 1;
    if (nextQuestion < currentSoals.length) {
      setCurrentQuestion(nextQuestion);
      setIsWrong(false);
      setIsCorrect(false);
    } else {
      setIsShowFinist(true);
    }
  };

  return (
    <Layout className="h-screen" title={`Games | Level ${level ? level : ""}`}>
      {isShowFinist ? (
        <FinistGame coin={coin} />
      ) : (
        <>
          <Header isBack href="/games" />
          {isLoading ? (
            <div className="container mx-auto pt-4">
              <Spinner isCenter isGreen isMedium />
            </div>
          ) : (
            <>
              {isCorrect && (
                <PopupCorrect handleClickNext={handleNextQuestions} />
              )}

              {isWrong && <PopupWrong handleClickNext={handleNextQuestions} />}

              {currentSoals[currectQuestion].type == "s11" && (
                <SesionSatuSatu
                  soal={currentSoals[currectQuestion].soal}
                  handleClickAnswer={handleClickAnswer}
                />
              )}

              {currentSoals[currectQuestion].type == "s12" && (
                <SesionSatuDua
                  soal={currentSoals[currectQuestion].soal}
                  handleClickAnswer={handleClickAnswer}
                />
              )}

              {currentSoals[currectQuestion].type == "s13" && (
                <SesionSatuTiga
                  soal={currentSoals[currectQuestion].soal}
                  handleClickAnswer={handleClickAnswer}
                />
              )}
            </>
          )}
        </>
      )}
    </Layout>
  );
};

export default Soal;
