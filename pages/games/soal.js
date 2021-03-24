import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import PopupCorrect from "../../components/molekul/Game/PopupCorrect";
import PopupWrong from "../../components/molekul/Game/PopupWrong";
import SesionSatuSatu from "../../components/molekul/Game/SesionSatuSatu";
import Button from "../../components/atom/Button";
import SesionSatuTiga from "../../components/molekul/Game/SesionSatuTiga";
import SesionDuaSatu from "../../components/molekul/Game/SesionDuaSatu";
import SesionSatuDua from "../../components/molekul/Game/SesionSatuDua";
import SesionDuaDua from "../../components/molekul/Game/SesionDuaDua";
import firebase from "../../config/firebase";
import Spinner from "../../components/atom/Spinner";

const FinistGame = ({ coin, reset, home }) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 h-60 bg-yellow rounded-lg shadow-lg flex flex-col justify-center items-center">
        <p className="text-white text-xl font-light">Koin yang kamu dapat</p>
        <h1 className="text-white font-bold text-4xl mb-4"> {coin} </h1>
        <div className="grid gap-4 grid-cols-3">
          <Button
            onClick={() => reset()}
            className="bg-white p-2"
            hasRounded
            hasShadow
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-yellow w-8 h-8 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
          </Button>
          <Button
            onClick={() => home()}
            className="bg-white p-2"
            hasRounded
            hasShadow
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="text-yellow w-8 h-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </Button>
          <Button className="bg-white p-2" hasShadow hasRounded>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="text-yellow w-8 h-8"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
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
  // const router = useRouter();

  useEffect(() => {
    if (level)
      firebase
        .firestore()
        .collection("soals")
        .where("level", "==", parseInt(level))
        .get()
        .then((result) => {
          result.forEach((doc) => {
            console.log(doc.data());
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

  const resetCoin = () => {
    console.log("hello");
    setCoin(0);
    setCurrentQuestion(0);
    setIsShowFinist(false);
    setIsCorrect(false);
    setIsWrong(false);
  };

  const updateToFirebase = (koin, level) => {
    return new Promise((resolve, reject) => {
      const user = firebase.auth().currentUser;
      if (user) {
        console.log(user.uid);
        const uid = user.uid;
        firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .update({
            koin,
            level,
          })
          .then((result) => {
            resolve(result);
          })
          .catch((err) => {
            reject(err);
          });
      }
    });
  };

  const handleToGameHome = () => {
    //    updateToFirebase(coin, level)
    //      .then(() => {
    //        console.log("Success Add Data");
    //        router.push("/games");
    //      })
    //      .catch((err) => console.log("Error: ", err));
    console.log("Seharusnya ke home games");
  };

  return (
    <Layout className="h-screen" title={`Games | Level ${level ? level : ""}`}>
      {isShowFinist ? (
        <FinistGame coin={coin} reset={resetCoin} home={handleToGameHome} />
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

              {currentSoals[currectQuestion].type == "s21" && (
                <SesionDuaSatu
                  question={currentSoals[currectQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}

              {currentSoals[currectQuestion].type == "s22" && (
                <SesionDuaDua
                  question={currentSoals[currectQuestion]}
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
