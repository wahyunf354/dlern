import Layout from "../components/Layout.js";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/atom/Button.js";
export default function Home() {
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
          <Button type="link" title="MULAI" href="/login" color="yellow-500" />
        </div>
      </div>

      <div className="px-6 md:px-96">
        <h1 className="font-bold text-2xl text-center my-4">Apa itu D'lern</h1>
        <p>
          <span className="text-xl font-bold">D'Lern</span> didesain untuk umum
          makannya pakai bahasa Indonesia, untuk yang sudah pernah belajar
          bahasa Jerman? Aman...
        </p>
        <p>
          Kita punya koin yang die lernenden dapatkan ketika mengerjakan soal.
          Setelah koin terkumpul, koin tersebut dapat dipakai untuk memilih
          season yang lebih menantang.
        </p>
      </div>
    </Layout>
  );
}
