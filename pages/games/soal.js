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

const sesion = {
  1: { eps: "1", sesion: "1" },
  2: { eps: "2", sesion: "1" },
  3: { eps: "3", sesion: "1" },
  4: { eps: "4", sesion: "1" },
  5: { eps: "5", sesion: "1" },
  6: { eps: "1", sesion: "2" },
  7: { eps: "2", sesion: "2" },
  8: { eps: "3", sesion: "2" },
};

const Soal = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSoals, setCurrentSoals] = useState([]);
  const [coin, setCoin] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [isShowFinist, setIsShowFinist] = useState(false);
  const eps = useRouter().query.eps;
  const router = useRouter();
  const { user, baseUrlAPI } = useContext(HeaderContext);

  useEffect(() => {
    if (user.name == null) {
      router.push("/games");
    }
    if (eps) {
      fetch(`${baseUrlAPI}api/game/${sesion[eps].sesion}/${sesion[eps].eps}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setCurrentSoals(result);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
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
    const currentEps = parseInt(eps) + 1;
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .update({
        koin: currentCoin + coin,
        eps: currentEps,
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
    const currentEps = parseInt(eps) + 1;
    firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .update({
        koin: currentCoin + coin,
        eps: currentEps,
      })
      .then(() => {
        router.push(`http://localhost:3000/games/soal?eps=${currentEps}`);
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

              {currentSoals[currentQuestion].type_soal == "s11" && (
                <SesionSatuSatu
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}
              {currentSoals[currentQuestion].type_soal == "s12" && (
                <SesionSatuDua
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}
              {currentSoals[currentQuestion].type_soal == "s13" && (
                <SesionSatuTiga
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}
              {currentSoals[currentQuestion].type_soal == "s21" && (
                <SesionDuaSatu
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}
              {currentSoals[currentQuestion].type_soal == "s22" && (
                <SesionDuaDua
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}

              {currentSoals[currentQuestion].type_soal == "s23" && (
                <SesionDuaTiga
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}

              {currentSoals[currentQuestion].type_soal == "s31" && (
                <SesionTigaSatu
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                  handleNextQuestions={handleNextQuestions}
                />
              )}

              {currentSoals[currentQuestion].type_soal == "s32" && (
                <SesionTigaDua
                  question={currentSoals[currentQuestion]}
                  handleClickAnswer={handleClickAnswer}
                />
              )}

              {currentSoals[currentQuestion].type_soal == "s41" && (
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
