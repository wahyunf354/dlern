import React from "react";
import Button from "../../components/atom/Button";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";

const data = {
  eps: {
    "eps-1": { id: "eps-1", content: "1" },
    "eps-2": { id: "eps-2", content: "2" },
    "eps-3": { id: "eps-3", content: "3" },
    "eps-4": { id: "eps-4", content: "4" },
    "eps-5": { id: "eps-5", content: "5" },
  },
  sesion: {
    "sesion-1": {
      id: "sesion-1",
      title: "Sesion 1",
      content: "1",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
    "sesion-2": {
      id: "sesion-2",
      title: "Sesion 2",
      content: "2",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
    "sesion-3": {
      id: "sesion-3",
      title: "Sesion 3",
      content: "3",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
    "sesion-4": {
      id: "sesion-4",
      title: "Sesion 4",
      content: "4",
      epsId: ["eps-1", "eps-2", "eps-3", "eps-4", "eps-5"],
    },
  },
  sesionOrder: ["sesion-1", "sesion-2", "sesion-3", "sesion-4"],
};

const GameLink = ({ sesion, eps }) => {
  return (
    <Button
      type="link"
      href={`/games/soal?sesion=${sesion}&eps=${eps}`}
      hasShadow
      className={`flex ${
        eps % 2 == 0 ? "justify-self-end" : "justify-self-start"
      } justify-center text-green-900 border border-green-900 items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24`}
    >
      {eps}
    </Button>
  );
};

const Column = ({ eps, sesion }) => {
  return (
    <div className="border p-5 w-min rounded-lg mb-5">
      <h3 className="text-gray-400 font-light text-4xl ">{sesion.title}</h3>
      <div className="grid justify-items-stretch grid-cols-1 mx-auto w-72 py-5">
        {sesion.epsId.map((epsId) => {
          return (
            <GameLink
              key={eps[epsId].id}
              sesion={sesion.content}
              eps={eps[epsId].content}
            />
          );
        })}
      </div>
    </div>
  );
};

function Games() {
  return (
    <Layout title="Games | De'lern">
      <Header isFull />
      <main className="container flex flex-col items-center mx-auto pt-5 relative">
        {data.sesionOrder.map((sesion) => {
          return (
            <Column
              eps={data.eps}
              sesion={data.sesion[sesion]}
              key={data.sesion[sesion].id}
            />
          );
        })}
      </main>
    </Layout>
  );
}

export default Games;
