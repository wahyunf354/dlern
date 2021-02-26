import Layout from "../components/Layout.js";
import Link from "next/link";
export default function Home() {
  return (
    <Layout title="Landing Page">
      <nav className="flex mx-auto px-8 justify-between py-4">
        <p className="text-xl">logo</p>
      </nav>
      <div className="container"></div>
    </Layout>
  );
}
