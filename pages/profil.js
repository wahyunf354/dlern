import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import HeaderContext from "../contexts/HeaderContext";
import firebase from "../config/firebase";
import { useRouter } from "next/router";
import Header from "../components/molekul/Header";
import TabBar from "../components/molekul/TabBar";
import Button from "../components/atom/Button";
import Spinner from "../components/atom/Spinner";

const Profil = () => {
  const router = useRouter();
  const { user, setUser } = useContext(HeaderContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push("/welcome");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

  if (!user.name) {
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    setIsLoading(true);
    // if (!currentUser) router.push("/login");
    firebase
      .firestore()
      .collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUser(doc.data());
          setIsLoading(false);
        } else {
          alert("terjadi masalah");
          setIsLoading(false);
        }
      });
  }

  return (
    <Layout title={`Profile | ${user.name}`}>
      <Header isFull />
      {isLoading ? (
        <div className="container p-4 mx-auto">
          <Spinner isCenter isGreen isMedium />
        </div>
      ) : (
        <div className="container pt-8 mx-auto flex flex-col items-center">
          <div className="mb-5 bg-gray-400 w-40 h-40 rounded-full"></div>
          <h3 className="text-5xl mb-5 text-green-900 font-font">
            {user.name}
          </h3>
          <ul className="flex w-full border-b-2 py-5 justify-around">
            <li className="text-3xl font-bold text-yellow">
              {user.koin}
              <span className="text-sm text-gray-400 font-light"> Koin</span>
            </li>
            <li className="text-3xl font-bold text-yellow">
              {user.eps}
              <span className="text-sm text-gray-400 font-light"> Eps</span>
            </li>
            <li className="text-3xl font-bold text-yellow">
              {user.sesion}
              <span className="text-sm text-gray-400 font-light">Sesion</span>
            </li>
          </ul>
          <div className="divide-y grid grid-cols-1 w-full mt-16 divide-gray-400 divide-solid">
            <Button onClick={handleLogout} className="text-gray-400 text-xl">
              Log out
            </Button>
          </div>
        </div>
      )}

      <TabBar />
    </Layout>
  );
};

export default Profil;
