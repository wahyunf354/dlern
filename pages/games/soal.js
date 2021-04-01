import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import PopupCorrect from "../../components/molekul/Game/PopupCorrect";
import PopupWrong from "../../components/molekul/Game/PopupWrong";
import SesionSatuSatu from "../../components/molekul/Game/SesionSatuSatu";
import SesionSatuTiga from "../../components/molekul/Game/SesionSatuTiga";
import SesionDuaSatu from "../../components/molekul/Game/SesionDuaSatu";
import SesionSatuDua from "../../components/molekul/Game/SesionSatuDua";
import SesionDuaDua from "../../components/molekul/Game/SesionDuaDua";
import SesionDuaTiga from "../../components/molekul/Game/SesionDuaTiga";
import SesionTigaSatu from "../../components/molekul/Game/SesionTIgaSatu";
import SesionTigaDua from "../../components/molekul/Game/SesionTigaDua";
import SesionEmpatSatu from "../../components/molekul/Game/SesionEmpatSatu";
import firebase from "../../config/firebase";
import Spinner from "../../components/atom/Spinner";
import FinistGame from "../../components/molekul/Game/FinistGame";
import HeaderContext from "../../contexts/HeaderContext";

const Soal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSoals, setCurrentSoals] = useState([]);
  const [coin, setCoin] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isShowFinist, setIsShowFinist] = useState(false);
  const eps = useRouter().query.eps;
  const sesion = useRouter().query.sesion;
  const router = useRouter();
  const { user } = useContext(HeaderContext);

  useEffect(() => {
    if (user.name == null) {
      router.push("/games");
    }
    if (eps && sesion)
      firebase
        .firestore()
        .collection("soals")
        .where("eps", "==", parseInt(eps))
        .where("sesion", "==", parseInt(sesion))
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
  }, [eps]);

  const handleClickAnswer = (answer) => {
    if (answer) {
      setIsCorrect(true);
      setCoin(coin + 1);
    } else {
      setIsWrong(true);
    }
  };

  const handleNextQuestions = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < currentSoals.length) {
      setCurrentQuestion(nextQuestion);
      setIsWrong(false);
      setIsCorrect(false);
    } else {
      setIsShowFinist(true);
    }
  };

  const resetCoin = () => {
    setCoin(0);
    setCurrentQuestion(0);
    setIsShowFinist(false);
    setIsCorrect(false);
    setIsWrong(false);
  };

  const handleToHome = () => {
    setIsLoading(true);

    const currentCoin = parseInt(user.koin);
    console.log(user);
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) router.push("/login");

    const uid = currentUser.uid;
    const currentEps = parseInt(eps) < 5 ? parseInt(eps) + 1 : 1;
    const currentSesion =
      parseInt(eps) === 5 ? parseInt(sesion) + 1 : parseInt(sesion);
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .update({
        koin: currentCoin + coin,
        eps: currentEps,
        sesion: currentSesion,
      })
      .then(() => {
        resetCoin();
        router.push("/games");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const handleNextEps = () => {
    setIsLoading(true);

    const currentCoin = parseInt(user.koin);
    console.log(user);
    const currentUser = firebase.auth().currentUser;
    if (!currentUser) router.push("/login");

    const uid = currentUser.uid;
    const currentEps = parseInt(eps) < 5 ? parseInt(eps) + 1 : 1;
    const currentSesion =
      parseInt(eps) === 5 ? parseInt(sesion) + 1 : parseInt(sesion);
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .update({
        koin: currentCoin + coin,
        eps: currentEps,
        sesion: currentSesion,
      })
      .then(() => {
        router.push(
          `http://localhost:3000/games/soal?sesion=${currentSesion}&eps=${currentEps}`
        );
        resetCoin();
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <Layout className="h-screen" title={`Games | eps ${eps ? eps : ""}`}>
      {isShowFinist ? (
        <FinistGame
          coin={coin}
          reset={resetCoin}
          home={handleToHome}
          isLoading={isLoading}
          handleNextEps={handleNextEps}
        />
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

              {currentSoals[currentQuestion].type == "s11" && (
                <SesionSatuSatu
                  soal={currentSoals[currentQuestion].soal}
                  handleClickAnswer={handleClickAnswer}
                />
              )}
              {currentSoals[currentQuestion].type == "s12" && (
                <SesionSatuDua
                  soal={currentSoals[currentQuestion].soal}
                  handleClickAnswer={handleClickAnswer}
                />
              )}
              {currentSoals[currentQuestion].type == "s13" && (
                <SesionSatuTiga
                  soal={currentSoals[currentQuestion].soal}
                  handleClickAnswer={handleClickAnswer}
                />
              )}
              {currentSoals[currentQuestion].type == "s21" && (
                <SesionDuaSatu
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}
              {currentSoals[currentQuestion].type == "s22" && (
                <SesionDuaDua
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}

              {currentSoals[currentQuestion].type == "s23" && (
                <SesionDuaTiga
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}

              {currentSoals[currentQuestion].type == "s31" && (
                <SesionTigaSatu
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                  handleNextQuestions={handleNextQuestions}
                />
              )}

              {currentSoals[currentQuestion].type == "s32" && (
                <SesionTigaDua
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}

              {currentSoals[currentQuestion].type == "s41" && (
                <SesionEmpatSatu
                  question={currentSoals[currentQuestion]}
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
