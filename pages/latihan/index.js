import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import { useContext, useEffect, useState } from "react";
import Spinner from "../../components/atom/Spinner";
import firebase from "../../config/firebase";
import { useRouter } from "next/router";
import HeaderContext from "../../contexts/HeaderContext";
import TabBar from "../../components/molekul/TabBar";
import GameLink from "../../components/molekul/Game/GameLink";
import PopupError from "../../components/molekul/Game/PopupError";

const data = [
  { epsId: 1, minKoin: 0 },
  { epsId: 2, minKoin: 0 },
  { epsId: 3, minKoin: 0 },
  { epsId: 4, minKoin: 0 },
  { epsId: 5, minKoin: 0 },
  { epsId: 6, minKoin: 75 },
  { epsId: 7, minKoin: 125 },
  { epsId: 8, minKoin: 130 },
  { epsId: 9, minKoin: 130 },
  { epsId: 10, minKoin: 130 },
];

function Games() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupError, setIsPopupError] = useState(false);
  const { user, setUser } = useContext(HeaderContext);
  const router = useRouter();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const {
              name,
              email,
              uid,
              hour,
              days,
              eps,
              koin,
              sesion,
            } = doc.data();
            setUser({
              name,
              email,
              uid,
              hour,
              days,
              eps,
              koin,
              sesion,
            });
            setIsLoading(false);
          } else {
            router.push("/login");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
          alert("Maaf terjadi masalah : ", error);
          router.push("/welcome");
        });
      if (!user) router.push("/login");
    });
  });

  const togglePopup = () => {
    setIsPopupError(!isPopupError);
  };

  return (
    <Layout title="Latihan | D'lern">
      <Header isFull />
      {isLoading ? (
        <div className="container p-4 mx-auto">
          <Spinner isCenter isGreen isMedium />
        </div>
      ) : (
        <div className="grid pb-16 justify-items-stretch grid-cols-1 mx-auto w-72 py-5 mx-auto">
          {isPopupError && (
            <>
              <PopupError togglePopup={togglePopup} />
            </>
          )}
          <h3 className="font-light text-4xl text-green-900 mb-5">Episode</h3>
          <GameLink epsId={1} currentEps={user.eps} togglePopup={togglePopup} />
          <GameLink epsId={2} currentEps={user.eps} togglePopup={togglePopup} />
          <GameLink epsId={3} currentEps={user.eps} togglePopup={togglePopup} />
          <GameLink epsId={4} currentEps={user.eps} togglePopup={togglePopup} />
          <GameLink epsId={5} currentEps={user.eps} togglePopup={togglePopup} />
          <GameLink epsId={6} currentEps={user.eps} togglePopup={togglePopup} />
          <GameLink epsId={7} currentEps={user.eps} togglePopup={togglePopup} />
          <GameLink epsId={8} currentEps={user.eps} togglePopup={togglePopup} />
          <GameLink epsId={9} currentEps={user.eps} togglePopup={togglePopup} />
          <GameLink
            epsId={10}
            currentEps={user.eps}
            togglePopup={togglePopup}
          />
        </div>
      )}
      <TabBar />
    </Layout>
  );
}

export default Games;
