import Layout from "../components/Layout.js";
import Image from "next/image";
import Button from "../components/atom/Button.js";
import { useState } from "react";
import Header from "../components/molekul/Header.js";
import InputText from "../components/atom/InputText";
import firebase from "../config/firebase";

function FromSaran() {
  const [isLoading, setIsLoading] = useState(false);
  const [saran, setSaran] = useState({
    email: "",
    desc: "",
  });

  const onChange = (e) => {
    setSaran({
      ...saran,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitBtn = () => {
    if (saran.email !== "" && saran.desc !== "") {
      setIsLoading(true);
      console.log(saran);
      firebase
        .firestore()
        .collection("saran")
        .add(saran)
        .then((result) => {
          console.log("Document written with ID: ", result.id);
          setSaran({
            email: "",
            desc: "",
          });
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error adding document: ", err);
          alert("Maaf Terjadi Masalah");
          setIsLoading(false);
        });
    } else {
      alert("Email dan sarannya kosong");
    }
  };

  return (
    <div className="flex flex-col md:px-96 px-5">
      <label className="mb-2 font-bold text-gray-800 text-xl">
        Email <span className="text-red-500">*</span>
      </label>
      <InputText
        id="email"
        type="email"
        placeholder="Masukan Email"
        errorResponse="Maaf email tidak valid"
        outerClassName="w-full mb-2"
        inputClassName="w-full"
        name="email"
        value={saran.email}
        onChange={onChange}
      />
      <label className="mb-2 font-bold text-gray-800 text-xl">
        Saran dan Masukan <span className="text-red-500">*</span>
      </label>
      <textarea
        name="desc"
        id="desc"
        cols="30"
        rows="10"
        className="input mb-5"
        value={saran.desc}
        onChange={onChange}
        placeholder="Masukan saran anda..."
      ></textarea>

      <Button
        className="md:w-min mb-6"
        isPrimary
        hasRounded
        hasShadow
        isLoading={isLoading}
        onClick={onSubmitBtn}
      >
        Send
      </Button>
    </div>
  );
}

export default function Landing() {
  return (
    <Layout title="Landing Page">
      {/* navbar */}
      <Header isRight />

      {/* banner */}
      <div className="container py-5 mb-10 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="px-6">
          <Image
            src="/assets/illustrasi/landing-page-hero.png"
            alt="Illustrasi Landing Page Bola Dunia"
            layout="responsive"
            width={650}
            height={425}
          />
        </div>
        <div className="flex flex-col justify-center items-center py-4">
          <h1 className="text-gray-800 font-bold text-8xl">D'lern</h1>
          <p className="mb-6 text-gray-400">Jeder kann Deutsch sprechen</p>
          <Button
            type="link"
            href="/welcome"
            className="text-sm"
            isPrimary
            hasRounded
            hasShadow
          >
            MULAI
          </Button>
        </div>
      </div>

      {/* apa itu D'lern */}
      <div className="px-6 md:px-96 mb-10">
        <h1 className="font-bold text-4xl text-center my-4">Apa itu D'lern</h1>
        <p className="text-gray-600">
          <span className="text-xl text-gray-900 font-bold">D'lern</span> adalah
          aplikasi belajar bahasa Jerman. Untuk kamu yang belum pernah belajar
          bahasa Jerman, tenang.. D'lern didesain untuk umum dengan menggunakan
          bahasa Indonesia.
        </p>
        <p className="text-gray-600">
          Kita punya koin yang dapat kamu kumpulkan ketika menjawab soal latihan
          dengan benar. Segera kumpulkan dan dapatkan akses untuk dapat memilih
          episode yang lebih menantang!
        </p>
      </div>

      {/* Fitur */}
      <div className="container py-5 mb-10 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col md:pl-24 px-6 justify-center">
          <h1 className="text-gray-900 mb-5 font-bold text-4xl">Fitur</h1>
          <ol>
            <li className="text-gray-600 mb-2 md:ml-3">
              1. Belajar bahasa Jerman kapan dan dimana saja
            </li>
            <li className="text-gray-600 mb-2 md:ml-3">
              2. Akses latihan secara daring, gratis tanpa mengurangi
              penyimpanan gawai kamu
            </li>
            <li className="text-gray-600 mb-2 md:ml-3">
              3. Akses ratusan kosakata dalam bahasa Jerman
            </li>
            <li className="text-gray-600 mb-2 md:ml-3">
              4. Koin untuk dikumpulkan
            </li>
          </ol>
        </div>
        <div className="px-6">
          <Image
            src="/assets/illustrasi/resting_.svg"
            alt="Illustrasi Landing Page Bola Dunia"
            layout="responsive"
            width={650}
            height={425}
          />
        </div>
      </div>

      {/* Masukan dan saran */}
      <div className="container mx-auto">
        <h1 className="text-gray-900 mb-5 text-center font-bold text-4xl">
          Saran dan Masukan
        </h1>
        <FromSaran />
      </div>

      {/* Contact */}

      {/* Footer */}
      <div className="text-center bg-gray-900 text-white text-lg py-5">
        <p>Copyright by D'lern</p>
      </div>
    </Layout>
  );
}
