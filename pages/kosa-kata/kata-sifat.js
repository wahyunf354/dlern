import React, { useEffect, useContext, useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import ItemKata from "../../components/molekul/ItemKata";
import firebase from "../../config/firebase";
import HeaderContext from "../../contexts/HeaderContext";
import { useRouter } from "next/router";
import Spinner from "../../components/atom/Spinner";
import TabBar from "../../components/molekul/TabBar";

function KataSifat() {
  const [state, setState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { baseUrlAPI } = useContext(HeaderContext);
  const router = useRouter();

  useEffect(async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) router.push("/login");
    });
    fetch(`${baseUrlAPI}/api/vocab/kata_sifat`)
      .then((res) => res.json())
      .then((result) => {
        const result1 = Object.entries(result);
        const data = Object.entries(result1[0][1])[0][1];
        console.log(data);
        setState({
          data,
        });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  });
  return (
    <Layout title="Kata Sifat | De'lern">
      <Header isBack href="/kosa-kata" />
      <main className="container mt-5 mx-auto px-5 grid grid-cols-2 md:grid-cols-6 gap-4 mb-20">
        <h2 className="col-span-2 md:col-span-6 text-4xl font-bold text-green-900">
          Kata Sifat
        </h2>
        {isLoading ? (
          <div className="container p-4 mx-auto">
            <Spinner isCenter isGreen isMedium />
          </div>
        ) : (
          state.data.map((item, i) => (
            <ItemKata
              key={i}
              jerman={item.jerman}
              indo={item.indo}
              sound={`https://dlern-rest.000webhostapp.com/assets/vocab/suara/kata_sifat/${item.url_voice}`}
              type="NO_WITH_IMG"
            />
          ))
        )}
      </main>
      <TabBar />
    </Layout>
  );
}

export default KataSifat;
