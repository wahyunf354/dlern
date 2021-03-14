import React from "react";
import Button from "../../components/atom/Button";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";

function Games() {
  return (
    <Layout title="Games | D'lern">
      <Header isFull />
      <main className="container mx-auto p-5 md:p-16 relative">
        <Button
          type="link"
          href="#"
          isPrimary
          hasShadow
          className="flex absolute right-10 justify-center items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24"
        >
          1
        </Button>

        <Button
          type="link"
          href="#"
          isPrimary
          hasShadow
          className="flex absolute left-10 top-24 justify-center items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24"
        >
          2
        </Button>

        <Button
          type="link"
          href="#"
          isPrimary
          hasShadow
          className="flex absolute right-10 top-48 justify-center items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24"
        >
          3
        </Button>

        <Button
          type="link"
          href="#"
          isPrimary
          hasShadow
          className="flex absolute left-10 top-72 justify-center items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24"
        >
          4
        </Button>

        <Button
          type="link"
          href="#"
          isPrimary
          hasShadow
          className="flex absolute right-10 top-96 justify-center items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24"
        >
          5
        </Button>
      </main>
    </Layout>
  );
}

export default Games;
