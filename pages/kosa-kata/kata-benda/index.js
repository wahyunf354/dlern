import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import Header from "../../../components/molekul/Header";
import ItemKata from "../../../components/molekul/ItemKata";
import InputText from "../../../components/atom/InputText";
import HeaderContext from "../../../contexts/HeaderContext";
import { useRouter } from "next/router";
import firebase from "../../../config/firebase";
import Button from "../../../components/atom/Button";
import TabBar from "../../../components/molekul/TabBar";

const kategori = [
  {
    title: "Bagian Tubuh",
    link: "bagian_tubuh",
  },
  {
    title: "Barang Di Kantor",
    link: "barang_dikantor",
  },
  {
    title: "Barang Di Rumah",
    link: "barang_dirumah",
  },
  {
    title: "Benda dalam Kelas",
    link: "benda_dalam_kelas",
  },
  {
    title: "Cuaca",
    link: "cuaca",
  },
  {
    title: "Makanan dan Minuman",
    link: "makanan_dan_minuman",
  },
  {
    title: "Minuman",
    link: "minuman",
  },
  {
    title: "Negara",
    link: "negara",
  },
  {
    title: "Obat",
    link: "obat",
  },
  {
    title: "Pakaian",
    link: "pakaian",
  },
  {
    title: "Tempat Wisata",
    link: "tempat_wisata",
  },
  {
    title: "Penyakit",
    link: "penyakit",
  },
];

const KataBenda = () => {
  const { baseUrlAPI } = useContext(HeaderContext);
  const router = useRouter();
  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Layout title="Kata Benda | D'lern">
      <Header isBack href="/kosa-kata" />
      <main className="container mt-5 mx-auto flex flex-col">
        <h2 className="text-4xl font-bold text-green-900 mb-5 px-5">
          Kata Benda
        </h2>
        <div className="flex mx-2 flex-wrap mb-20 justify-center">
          {true ? (
            kategori.map((item, i) => (
              <Button
                key={i}
                hasShadow
                hasRounded
                type="link"
                href={`kata-benda/${item.link}`}
                className="p-5 mr-5 mb-5 bg-green-900 text-xl text-white"
              >
                {item.title}
              </Button>
            ))
          ) : (
            <div className="container flex justify-center p-4 mx-auto">
              <Spinner isCenter isGreen isMedium />
            </div>
          )}
        </div>
      </main>
      <TabBar />
    </Layout>
  );
};

export default KataBenda;
