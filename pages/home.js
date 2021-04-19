import React, { useContext, useEffect, useState } from "react";
import firebase from "../config/firebase";
import { useRouter } from "next/router";
import Header from "../components/molekul/Header";
import Button from "../components/atom/Button";
import Image from "next/image";
import Layout from "../components/Layout";
import Spinner from "../components/atom/Spinner";
import HeaderContext from "../contexts/HeaderContext";
import TabBar from "../components/molekul/TabBar";

function ContentHome(props) {
  return (
    <div className="container mb-16 relative md:px-36 px-5 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 pt-10">
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
        <h2 className="hover:text-gray-500 underline text-green-900">
          Kosa Kata
        </h2>
      </Button>
      <Button className="py-4" hasShadow hasRounded href="/latihan" type="link">
        <Image
          src="/assets/illustrasi/game.png"
          width={200}
          height={140}
          layout="responsive"
        />
        <h2 className="hover:text-gray-500 underline text-green-900">
          Latihan
        </h2>
      </Button>
    </div>
  );
}

function home() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(HeaderContext);

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
            setLoading(false);
          } else {
            alert("Maaf terjadi masalah ");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
          alert("Maaf terjadi masalah ");
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
        <div className="relative">
          <ContentHome nameUser={user.name} />
          <TabBar />
        </div>
      )}
    </Layout>
  );
}

export default home;
