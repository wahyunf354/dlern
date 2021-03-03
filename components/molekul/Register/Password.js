import React from "react";
import Button from "../../atom/Button";

function Password() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-3/4">
        <label className="mb-2 text-xl text-gray-700">Password</label>
        <input type="email" placeholder="Masukan Password" className="input" />
        <label className="mb-2 text-xl text-gray-700">Confrim Password</label>
        <input
          type="email"
          placeholder="Masukan Confrim Password"
          className="input"
        />
      </div>
      <div class="w-full flex">
        <Button
          isPrimary
          hasShadow
          hasRounded
          className="ml-auto md:mx-auto mx-10"
        >
          Lanjut
        </Button>
      </div>
    </>
  );
}

export default Password;
