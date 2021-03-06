import React, { useState } from "react";
import InputText from "../components/atom/InputText";
import Meta from "../components/atom/Stepper/Meta";
import Header from "../components/molekul/Register/Header";
import Layout from "../components/Layout";
import Button from "../components/atom/Button";

const login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setLogin({
      [e.terget.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    console.log(login);
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
      <div className="w-full flex flex-col items-center mt-20">
        <label className="mb-2 text-lg text-gray-700">Email</label>
        <InputText
          name="email"
          id="email"
          type="email"
          value={login.emial}
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
          inputClassName="w-full"
        />
        <Button
          className="md:w-1/3 w-10/12"
          isPrimary
          hasShadow
          hasRounded
          onClick={handleLogin}
        >
          Log in
        </Button>
      </div>
    </Layout>
  );
};

export default login;
