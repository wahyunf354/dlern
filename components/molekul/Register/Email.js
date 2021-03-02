import React from "react";
import Button from "../../atom/Button";

function Email() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-3/4">
        <label className="mb-2 text-xl text-gray-700">Email</label>
        <input type="email" placeholder="Masukan Email" className="input" />
      </div>
      <div className="w-full flex">
        <Button
          isPrimary
          hasRounded
          hasShadow
          className="ml-auto md:m-auto mx-10"
        >
          Lanjut
        </Button>
      </div>
    </>
  );
}

export default Email;
