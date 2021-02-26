import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Splas() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("landing-page");
    }, 1000);
  });

  return (
    <div className="container h-screen w-screen flex justify-center items-center">
      <h1 className="text-4xl font-bold">D'lern</h1>
    </div>
  );
}
