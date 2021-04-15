import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Splas() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("landing-page");
    }, 1000);
  });

  return (
    <Layout
      title="D'lern"
      className="container mx-auto h-screen w-screen flex justify-center items-center"
    >
      <Image
        src="/assets/logo/logo.png"
        alt="D'lern"
        width={150}
        height={150}
      />
    </Layout>
  );
}
