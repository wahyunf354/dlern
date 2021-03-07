import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import Button from "../components/atom/Button";
import firebase from "../config/firebase";
import useRouter from "next/router";

function welcome() {
  const router = useRouter;
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) router.push("/home");
    });
  }, []);

  return (
    <Fade>
      <div className="min-h-screen bg-gray-300 py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3 md:w-1/3 text-center sm:max-w-xl sm:mx-auto">
          <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
            <div className="px-12 py-5">
              <h2 className="text-gray-800 text-3xl font-semibold">
                Selamat Datang
              </h2>
            </div>
            <div className="bg-gray-200 w-full flex flex-col items-center">
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-lg text-gray-700">
                  Mulailah keseruan belajar bahasa Jerman
                </span>
              </div>
              <div className="w-3/4 flex flex-col py-2">
                <Button
                  type="link"
                  href="/login"
                  className="mb-5"
                  isPrimary
                  hasShadow
                  hasRounded
                >
                  Masuk
                </Button>
                <Button
                  type="link"
                  href="/register"
                  className="mb-5"
                  isPrimary
                  hasRounded
                  hasShadow
                >
                  Daftar
                </Button>
              </div>
            </div>
            <div className="h-20 flex items-center justify-center">
              <a href="/landing-page" className="text-gray-600">
                Mungkin nanti
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default welcome;
