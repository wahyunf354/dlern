import Image from "next/image";
import React, { useState } from "react";
import Button from "../../components/atom/Button";
import Layout from "../../components/Layout";
import Header from "../../components/molekul/Header";

const ItemKataBenda = ({ jerman, indo, img, sound }) => {
  const [isPlay, setIsPlay] = useState(false);

  const playSound = async () => {
    const audio = new Audio(sound);
    if (isPlay) {
      await audio.pause(true);
      setIsPlay(false);
      console.log(isPlay);
    } else {
      await audio.play();
      setIsPlay(true);
      console.log(isPlay);
    }
  };

  return (
    <Button onClick={playSound} className="p-2 border" hasRounded hasShadow>
      <div className="h-24 bg-gray-500 overflow-hidden rounded">
        <img src={img} alt={jerman} />
      </div>
      <h2 className="font-bold text-sm mt-2">{jerman}</h2>
      <p className="text-xs font-light">"{indo}"</p>
    </Button>
  );
};

const KataBenda = () => {
  const playSound = () => {
    console.log("Suara");
  };
  return (
    <Layout title="Kata Benda | D'lern">
      <Header isBack href="/kosa-kata" />
      <main className="container mt-5 mx-auto px-5 md:px-24 grid grid-cols-2 md:grid-cols-6 gap-4">
        <h2 className="col-span-2 md:col-span-6 text-4xl font-bold text-gray-900">
          Kata Benda
        </h2>
        <ItemKataBenda
          jerman="Jerman"
          indo="Indo"
          img="https://placeimg.com/640/480/any"
          sound="http://streaming.tdiradio.com:8000/house.mp3"
        />
      </main>
    </Layout>
  );
};

export default KataBenda;
