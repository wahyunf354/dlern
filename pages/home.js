import React, { useEffect } from "react";
import firebase from "../config/firebase";
import useRouter from "next/router";
import Header from "../components/molekul/Header";

function home() {
  const router = useRouter;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (!user) router.push("/login");
    });
  }, []);

  return (
    <>
      <Header isFull />
    </>
  );
}

export default home;
