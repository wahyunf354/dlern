import React, { useState } from "react";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import ItemKata from "../../components/molekul/ItemKata";
import InputText from "../../components/atom/InputText";

const KataBenda = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };
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
          img="https://placeimg.com/640/480/any"
          sound="/assets/sound/an.mp4"
          type="WITH_IMG"
        />
      </main>
    </Layout>
  );
};

export default KataBenda;
