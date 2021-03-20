import React, { useEffect, useState } from "react";
import firebase from "../config/firebase";
import useRouter from "next/router";
import Header from "../components/molekul/Header";
import Button from "../components/atom/Button";
import Image from "next/image";
import Layout from "../components/Layout";
import Spinner from "../components/atom/Spinner";

function ContentHome(props) {
  return (
    <>
      <div className="container relative md:px-36 px-5 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 pt-10">
        <div className="md:col-span-2">
          <h1 className="text-blue-900 text-2xl font-bold">
            Hai, {props.nameUser}
          </h1>
        </div>
        <Button
          className="py-4 border-1"
          href="/kosa-kata"
          type="link"
          hasShadow
          hasRounded
        >
          <Image
            src="/assets/illustrasi/kosa-kata.png"
            width={200}
            height={140}
            layout="responsive"
          />
          <h2 className="hover:text-gray-500">Kosa Kata</h2>
        </Button>
        <Button className="py-4" hasShadow hasRounded href="/games" type="link">
          <Image
            src="/assets/illustrasi/game.png"
            width={200}
            height={140}
            layout="responsive"
          />
          <h2 className="hover:text-gray-500">Ayo Belajar</h2>
        </Button>
      </div>
    </>
  );
}

function home() {
  const router = useRouter;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user.uid);
      firebase
        .firestore()
        .collection("users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const { name, email, uid, hour, days } = doc.data();
            setUser({
              name,
              email,
              uid,
              hour,
              days,
            });
            setLoading(false);
          } else {
            router.push("/login");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
          router.push("/login");
        });
      if (!user) router.push("/login");
    });
  }, []);

  return (
    <Layout title="Home | D'lern">
      <Header isFull />
      {loading ? (
        <div className="container p-4 mx-auto">
          <Spinner isCenter isGreen isMedium />
        </div>
      ) : (
        <ContentHome nameUser={user.name} />
      )}
    </Layout>
  );
}

export default home;
