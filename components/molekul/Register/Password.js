import React from "react";
import InputText from "../../atom/InputText";

function Password({ onChange, value }) {
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
          password={value.password}
          onChange={onChange}
          value={value.confpassword}
          placeholder="Masukan confrim password..."
          errorResponse="Password tidak sama"
          outerClassName="w-10/12 md:w-1/3"
          inputClassName="w-full"
        />
      </div>
    </>
  );
}

export default Password;
