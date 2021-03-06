import React from "react";
import { useState } from "react";
import InputText from "../../atom/InputText";

function Email({ onChange, value }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-3/4">
        <InputText
          id="email"
          type="email"
          placeholder="Masukan Email"
          errorResponse="Maaf email tidak valid"
          outerClassName="w-10/12 md:w-1/3 mb-24"
          inputClassName="w-full"
          name="email"
          value={value.email}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default Email;
