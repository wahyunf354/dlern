import Layout from "../components/Layout.js";
import Image from "next/image";
import { Button } from "../components/atom/Button.js";

function FromSaran() {
  return (
    <form className="flex flex-col md:px-96 px-5">
      <label className="mb-2 font-bold text-gray-800 text-xl">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        type="email"
        placeholder="Masukan Email"
        className="shadow-lg mb-6 border-2 border-gray-200 py-2 px-4 rounded-md"
      />
      <label className="mb-2 font-bold text-gray-800 text-xl">
        Saran dan Masukan <span className="text-red-500">*</span>
      </label>
      <textarea
        name="saran"
        id="saran"
        cols="30"
        rows="10"
        className="shadow-lg border-2 mb-6 border-gray-200 py-2 px-4 rounded-md"
      ></textarea>
      <button className="bg-yellow-500 rounded-lg py-2 px-5 text-white mb-6 md:w-min ">
        Send
      </button>
    </form>
  );
}

export default function Landing() {
  return (
    <Layout title="Landing Page">
      {/* navbar */}
      <nav className="flex px-8 justify-between py-6">
        <Image
          src="/assets/logo/logo.png"
          alt="D'lern"
          width={50}
          height={50}
        />
      </nav>

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
          <h1 className="text-gray-900 font-bold text-4xl">D'lern</h1>
          <p className="mb-6 text-gray-400">Jade man kann sprechen</p>
          <Button
            type="link"
            title="MULAI"
            href="/register"
            className="bg-yellow-500 text-sm hover:bg-yellow-400 focus:bg-yellow-400"
          />
        </div>
      </div>

      {/* apa itu D'lern */}
      <div className="px-6 md:px-96 mb-10">
        <h1 className="font-bold text-2xl text-center my-4">Apa itu D'lern</h1>
        <p className="text-gray-600">
          <span className="text-xl text-gray-900 font-bold">D'Lern</span>{" "}
          didesain untuk umum makannya pakai bahasa Indonesia, untuk yang sudah
          pernah belajar bahasa Jerman? Aman...
        </p>
        <p className="text-gray-600">
          Kita punya koin yang die lernenden dapatkan ketika mengerjakan soal.
          Setelah koin terkumpul, koin tersebut dapat dipakai untuk memilih
          season yang lebih menantang.
        </p>
      </div>

      {/* Fitur */}
      <div className="container py-5 mb-10 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col md:pl-24 px-6 justify-center">
          <h1 className="text-gray-900 mb-5 font-bold text-4xl">Fitur</h1>
          <ol>
            <li className="text-gray-600 mb-2 md:ml-3">
              1. Belajar bahasa dari mana aja dan kapan saja
            </li>
            <li className="text-gray-600 mb-2 md:ml-3">
              2. Akses pelajaran tanpa mengurangi penyimpanan Hp anda
            </li>
            <li className="text-gray-600 mb-2 md:ml-3">
              3. Akses vocab yang kami sediakan
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
