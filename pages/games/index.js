import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import ColumnSesion from "../../components/molekul/Game/ColumnSesion";
import { useContext, useEffect, useState } from "react";
import Spinner from "../../components/atom/Spinner";
import firebase from "../../config/firebase";
import { useRouter } from "next/router";
import HeaderContext from "../../contexts/HeaderContext";
import TabBar from "../../components/molekul/TabBar";
import GameLink from "../../components/molekul/Game/GameLink";

function Games() {
  const [isLoading, setIsLoading] = useState(true);
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

  return (
    <Layout title="Games | De'lern">
      <Header isFull />
      {isLoading ? (
        <div className="container p-4 mx-auto">
          <Spinner isCenter isGreen isMedium />
        </div>
      ) : (
        <div className="grid pb-16 justify-items-stretch grid-cols-1 mx-auto w-72 py-5 mx-auto">
          <h3 className="font-light text-4xl text-green-900 mb-5">Episode</h3>
          <GameLink epsId={1} currentEps={user.eps} />
          <GameLink epsId={2} currentEps={user.eps} />
          <GameLink epsId={3} currentEps={user.eps} />
          <GameLink epsId={4} currentEps={user.eps} />
          <GameLink epsId={5} currentEps={user.eps} />
          <GameLink epsId={6} currentEps={user.eps} />
          <GameLink epsId={7} currentEps={user.eps} />
          <GameLink epsId={8} currentEps={user.eps} />
        </div>
      )}
      <TabBar />
    </Layout>
  );
}

export default Games;
