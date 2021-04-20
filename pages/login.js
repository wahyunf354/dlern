import React, { useState, useEffect } from "react";
import InputText from "../components/atom/InputText";
import Meta from "../components/atom/Stepper/Meta";
import Header from "../components/molekul/Header";
import Layout from "../components/Layout";
import Button from "../components/atom/Button";
import firebase from "../config/firebase";
import useRouter from "next/router";

const login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  const router = useRouter;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) router.push("/home");
    });
  }, []);

  const onChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(login.email, login.password)
      .then((user) => {
        setIsLoading(false);
        router.push("/home");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message, error.code);
        setHasError(error.message);
      });
  };

  const data = {
    login: {
      title: "Login",
      description: "Mari login jika anda telah memiliki akun",
    },
  };
  return (
    <Layout>
      <Header />
      <Meta data={data} current="login" />
      <div className="w-full flex flex-col items-center mt-16">
        <label className="mb-2 text-lg text-gray-700">Email</label>
        <InputText
          name="email"
          id="email"
          type="email"
          value={login.email}
          onChange={onChange}
          placeholder="Masukan email..."
          errorResponse="Email tidak valid"
          outerClassName="w-10/12 md:w-1/3"
          inputClassName="w-full"
        />
        <label className="mb-2 text-lg text-gray-700">Password</label>
        <InputText
          name="password"
          id="password"
          type="password"
          onChange={onChange}
          placeholder="Masukan password..."
          value={login.password}
          outerClassName="w-10/12 md:w-1/3"
          errorResponse="Password kurang dari 6 karakter"
          inputClassName="w-full"
        />
        {hasError && <span className="text-red-500 text-xs">{hasError}</span>}
        {isLoading ? (
          <Button
            className="md:w-1/3 w-10/12 mt-12"
            isSecondary
            isLoading
            hasShadow
            hasRounded
            onClick={handleLogin}
          >
            Loading...
          </Button>
        ) : (
          <Button
            className="md:w-1/3 w-10/12 mt-12"
            isPrimary
            hasShadow
            hasRounded
            onClick={handleLogin}
          >
            Masuk
          </Button>
        )}
        <Button type="link" href="/welcome" className="text-gray-500 mt-3">
          Kembali
        </Button>
      </div>
    </Layout>
  );
};

export default login;
