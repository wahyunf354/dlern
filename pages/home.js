import React, { useEffect } from "react";
import firebase from "../config/firebase";
import useRouter from "next/router";
import Header from "../components/molekul/Header";
import Button from "../components/atom/Button";

function ContentHome(props) {
  return (
    <>
      <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 gap-4 pt-10">
        <div className="md:col-span-2">
          <h1 className="text-blue-900 text-2xl font-bold">
            Hi, {props.nameUser}
          </h1>
        </div>
        <Button className="py-4" hasShadow hasRounded>
          Kosa Kata
        </Button>
        <Button className="py-4" hasShadow hasRounded>
          Games
        </Button>
      </div>
    </>
  );
}

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
      <ContentHome nameUser="Wahyu Nur Fadillah" />
    </>
  );
}

export default home;
