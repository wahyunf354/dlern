import React from "react";
import Button from "../../components/atom/Button";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";

const GameLink = ({ level }) => {
  return (
    <Button
      type="link"
      href={`games/soal?level=${level}`}
      isPrimary
      hasShadow
      className={`flex ${
        level % 2 == 0 ? "justify-self-end" : "justify-self-start"
      } justify-center items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24`}
    >
      {level}
    </Button>
  );
};

function Games() {
  return (
    <Layout title="Games | D'lern">
      <Header isFull />
      <main className="container grid justify-items-stretch grid-cols-1 mx-auto p-8 md:p-16 relative">
        <GameLink level={1} />
        <GameLink level={2} />
        <GameLink level={3} />
        <GameLink level={4} />
        <GameLink level={5} />
      </main>
    </Layout>
  );
}

export default Games;
