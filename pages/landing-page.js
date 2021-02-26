import Layout from "../components/Layout.js";
import Link from "next/link";
import { Button } from "../components/atom/Button.js";
export default function Home() {
  return (
    <Layout title="Landing Page">
      {/* navbar */}
      <nav className="flex px-8 justify-between py-6">
        <div className="h-10 w-10 bg-current"></div>
      </nav>

      {/* banner */}
      <div className="container py-5 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className="h-96 bg-gray-200 mx-auto"></div>
        </div>
        <div className="flex flex-col justify-center items-center py-4">
          <h1 className="text-gray-900 font-bold text-4xl">D'lern</h1>
          <p className="mb-6 text-gray-400">Jade man kann sprechen</p>
          <Button type="link" title="Mulai" href="/login" color="yellow-400" />
        </div>
      </div>

      <div className="px-6">
        <h1 className="font-bold text-2xl text-center my-4">Apa itu d'lern</h1>
        <p>
          <span>D'Lern</span> didesain untuk umum makannya pakai bahasa
          Indonesia, untuk yang sudah pernah belajar bahasa Jerman? Aman...
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
