import React from "react";
import Button from "../../components/atom/Button";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";
import TabBar from "../../components/molekul/TabBar";

const index = () => {
  return (
    <Layout title="Kosa Kata | De'lern">
      <Header isFull />
      <main className="container mx-auto md:w-1/2 pt-20 px-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <Button
          type="link"
          href="/kosa-kata/kata-benda"
          isPrimary
          hasShadow
          hasRounded
        >
          Kata Benda
        </Button>
        <Button
          type="link"
          href="/kosa-kata/kata-kerja"
          isPrimary
          hasShadow
          hasRounded
        >
          Kata Kerja
        </Button>
        <Button
          type="link"
          href="/kosa-kata/kata-sifat"
          isPrimary
          hasShadow
          hasRounded
        >
          Kata Sifat
        </Button>
        <Button
          type="link"
          href="/kosa-kata/konjungsi"
          isPrimary
          hasShadow
          hasRounded
        >
          Konjungsi
        </Button>
        <Button
          type="link"
          href="/kosa-kata/preposisi"
          isPrimary
          hasShadow
          hasRounded
        >
          Preposisi
        </Button>
        <Button
          type="link"
          href="/kosa-kata/kata-keterangan"
          isPrimary
          hasShadow
          hasRounded
        >
          Kata Keterangan
        </Button>
      </main>
      <TabBar />
    </Layout>
  );
};

export default index;
