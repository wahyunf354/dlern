import React from "react";
import Button from "../../components/atom/Button";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";

const index = () => {
  return (
    <Layout title="Kosa Kata | De'lern">
      <Header isFull />
      <main className="container mx-auto pt-5 px-5 grid grid-cols-1 gap-5 md:grid-cols-3">
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
      </main>
    </Layout>
  );
};

export default index;
