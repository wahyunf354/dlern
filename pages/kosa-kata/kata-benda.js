import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import ItemKata from "../../components/molekul/ItemKata";

const KataBenda = () => {
  return (
    <Layout title="Kata Benda | D'lern">
      <Header isBack href="/kosa-kata" />
      <main className="container mt-5 mx-auto px-5 md:px-24 grid grid-cols-2 md:grid-cols-6 gap-4">
        <h2 className="col-span-2 md:col-span-6 text-4xl font-bold text-gray-900">
          Kata Benda
        </h2>
        <ItemKata
          jerman="Jerman"
          indo="Indo"
          img="https://placeimg.com/640/480/any"
          sound="/assets/sound/an.mp4"
          type="WITH_IMG"
        />
      </main>
    </Layout>
  );
};

export default KataBenda;
