import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import ItemKata from "../../components/molekul/ItemKata";
import InputText from "../../components/atom/InputText";
import HeaderContext from "../../contexts/HeaderContext";
import { useRouter } from "next/router";
import firebase from "../../config/firebase";

const KataBenda = () => {
  const [state, setState] = useState(null);
  const { baseUrlAPI } = useContext(HeaderContext);
  const router = useRouter();
  const onChange = (e) => {
    console.log(e.target.value);
  };

  useEffect(async () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) router.push("/login");
    });
    fetch(`${baseUrlAPI}api/vocab/kata_benda/minuman`)
      .then((res) => res.json())
      .then((result) => {
        const result1 = Object.entries(result);
        const data = Object.entries(result1[0][1])[0][1];
        console.log(data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <Layout title="Kata Benda | De'lern">
      <Header isBack href="/kosa-kata" />
      <main className="container mt-5 mx-auto px-5 md:px-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <h2 className="col-span-2 md:col-span-6 text-4xl font-bold text-gray-900">
          Kata Benda
        </h2>
        <div className="col-span-2 md:col-span-6">
          <InputText
            placeholder="Masukan kata kunci..."
            type="text"
            outerClassName="w-full"
            inputClassName="w-full"
            onChange={onChange}
          />
        </div>
        <ItemKata
          jerman="Jerman"
          indo="Indo"
          img="https://dlern-rest.000webhostapp.com/assets/vocab/gambar/negara/Italien.png"
          sound="/assets/sound/an.mp4"
          type="WITH_IMG"
        />
      </main>
    </Layout>
  );
};

export default KataBenda;
