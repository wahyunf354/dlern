import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import HeaderContext from "../contexts/HeaderContext";
import firebase from "../config/firebase";
import { useRouter } from "next/router";

const Profil = () => {
  const router = useRouter();
  const { user, setUser } = useContext(HeaderContext);
  const [isLoading, setIsLoading] = useState(true);

  if (!user.name) {
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    // if (!currentUser) router.push("/login");
    firebase
      .firestore()
      .collection("users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUser(doc.data());
        } else {
          alert("terjadi masalah");
        }
      });
  }

  return <Layout title={`Profile | ${user.name}`}>your profile here</Layout>;
};

export default Profil;
