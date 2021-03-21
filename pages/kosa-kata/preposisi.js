import React from "react";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import ItemKata from "../../components/molekul/ItemKata";

function Proposisi() {
  return (
    <Layout title="Proposisi">
      <Header isBack href="/kosa-kata" />
      <main className="container mt-5 mx-auto px-5 md:px-24 grid grid-cols-2 md:grid-cols-6 gap-4">
        <h1 className="col-span-2 md:col-span-6 text-4xl font-bold text-gray-900">
          Präpositionen
        </h1>
      </main>
    </Layout>
  );
}

export default Proposisi;
