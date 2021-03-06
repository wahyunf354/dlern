import React from "react";
import InputText from "../../atom/InputText";

function Name({ onChange, value }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-3/4">
        <InputText
          id="name"
          name="name"
          placeholder="Masukan Nama"
          outerClassName="w-10/12 md:w-1/3 mb-24"
          inputClassName="w-full"
          onChange={onChange}
          value={value.name}
        />
      </div>
    </>
  );
}

export default Name;
