import React, { useState } from "react";
import InputText from "../../atom/InputText";
import { useForm } from "react-hook-form";

function Password({ onChange, value }) {
  const [confPassword, setConfPassword] = useState("");

  const handleChangeConfPassword = (event) => {
    setConfPassword(event.target.value);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-3/4">
        <label className="mb-2 text-lg text-gray-700">Password</label>
        <InputText
          type="password"
          name="password"
          id="password"
          onChange={onChange}
          value={value.password}
          placeholder="Masukan password..."
          errorResponse="Password harus terdiri dari 6 karakter"
          outerClassName="w-10/12 md:w-1/3"
          inputClassName="w-full"
        />
        <label className="mb-2 text-lg text-gray-700">Confirm Password</label>
        <InputText
          type="password"
          name="confpassword"
          id="confpassword"
          valuePassword={value.password}
          onChange={handleChangeConfPassword}
          value={confPassword}
          placeholder="Masukan password..."
          errorResponse="Password tidak sama"
          outerClassName="w-10/12 md:w-1/3"
          inputClassName="w-full"
        />
      </div>
    </>
  );
}

export default Password;
