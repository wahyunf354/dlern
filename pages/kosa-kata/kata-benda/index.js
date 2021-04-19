import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Header from "../../../components/molekul/Header";
import HeaderContext from "../../../contexts/HeaderContext";
import firebase from "../../../config/firebase";
import Button from "../../../components/atom/Button";
import TabBar from "../../../components/molekul/TabBar";
import { useRouter } from "next/router";
import PopupError from "../../../components/molekul/Game/PopupError";
import Spinner from "../../../components/atom/Spinner";

const kategori = [
  {
    title: "Bagian Tubuh",
    link: "bagian_tubuh",
    minKoin: 25,
  },
  {
    title: "Barang Di Kantor",
    link: "barang_dikantor",
    minKoin: 25,
  },
  {
    title: "Barang Di Rumah",
    link: "barang_dirumah",
    minKoin: 0,
  },
  {
    title: "Benda dalam Kelas",
    link: "benda_dalam_kelas",
    minKoin: 50,
  },
  {
    title: "Cuaca",
    link: "cuaca",
    minKoin: 50,
  },
  {
    title: "Makanan dan Minuman",
    link: "makanan_dan_minuman",
    minKoin: 0,
  },
  {
    title: "Minuman",
    link: "minuman",
    minKoin: 70,
  },
  {
    title: "Negara",
    link: "negara",
    minKoin: 0,
  },
  {
    title: "Obat",
    link: "obat",
    minKoin: 70,
  },
  {
    title: "Pakaian",
    link: "pakaian",
    minKoin: 80,
  },
  {
    title: "Tempat Wisata",
    link: "tempat_wisata",
    minKoin: 0,
  },
  {
    title: "Penyakit",
    link: "penyakit",
    minKoin: 100,
  },
];

const KataBenda = () => {
  const router = useRouter();
  const { user, setUser } = useContext(HeaderContext);
  const [isPopupError, setIsPopupError] = useState(false);
  const [loading, setLoading] = useState(true);

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
              profile,
              nameImg,
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
              profile,
              nameImg,
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

  const togglePopup = () => {
    setIsPopupError(!isPopupError);
  };

  console.log(user.koin);
  return (
    <Layout title="Kata Benda | D'lern">
      <Header isBack href="/kosa-kata" />
      <main className="container mt-5 mx-auto flex flex-col">
        {isPopupError && (
          <>
            <PopupError togglePopup={togglePopup} />
          </>
        )}
        <h2 className="text-4xl font-bold text-green-900 mb-5 px-5">
          Kata Benda
        </h2>
        <div className="flex mx-2 flex-wrap mb-20 justify-center">
          {!loading ? (
            kategori.map((item, i) =>
              user.koin >= item.minKoin ? (
                <Button
                  key={i}
                  hasShadow
                  hasRounded
                  type="link"
                  href={`kata-benda/${item.link}`}
                  className="p-5 mr-5 mb-5 bg-green-900 text-xl text-white"
                >
                  {item.title}
                </Button>
              ) : (
                <Button
                  key={i}
                  hasShadow
                  hasRounded
                  onClick={() => togglePopup()}
                  className="p-5 mr-5 mb-5 bg-white text-xl text-green-900"
                >
                  {item.title}
                </Button>
              )
            )
          ) : (
            <div className="container flex justify-center p-4 mx-auto">
              <Spinner isCenter isGreen isMedium />
            </div>
          )}
        </div>
      </main>
      <TabBar />
    </Layout>
  );
};

export default KataBenda;
