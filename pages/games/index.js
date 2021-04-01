import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import ColumnSesion from "../../components/molekul/Game/ColumnSesion";
import { useContext, useEffect, useState } from "react";
import Spinner from "../../components/atom/Spinner";
import firebase from "../../config/firebase";
import { useRouter } from "next/router";
import HeaderContext from "../../contexts/HeaderContext";

const data = {
  eps: {
    "eps-1": { id: "eps-1", content: "1" },
    "eps-2": { id: "eps-2", content: "2" },
    "eps-3": { id: "eps-3", content: "3" },
    "eps-4": { id: "eps-4", content: "4" },
    "eps-5": { id: "eps-5", content: "5" },
  },
  sesion: {
    "sesion-1": {
      id: "sesion-1",
      title: "Sesion 1",
      content: "1",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
    "sesion-2": {
      id: "sesion-2",
      title: "Sesion 2",
      content: "2",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
    "sesion-3": {
      id: "sesion-3",
      title: "Sesion 3",
      content: "3",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
    "sesion-4": {
      id: "sesion-4",
      title: "Sesion 4",
      content: "4",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
  },
  sesionOrder: ["sesion-1", "sesion-2", "sesion-3", "sesion-4"],
};

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
        <div className="container flex flex-col items-center mx-auto pt-5 relative">
          {data.sesionOrder.map((sesion) => {
            return (
              <ColumnSesion
                currentSesion={user.sesion}
                currentEps={user.eps}
                eps={data.eps}
                sesion={data.sesion[sesion]}
                key={data.sesion[sesion].id}
              />
            );
          })}
        </div>
      )}
    </Layout>
  );
}

export default Games;
