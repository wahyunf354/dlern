import React from "react";
import { useState } from "react";
import Button from "../../atom/Button";

function Days() {
  const [senin, setSenin] = useState();

  const onChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-4/5">
        <div class="grid gap-4">
          <label className="inline-flex items-center mt-3">
            <input
              value={senin}
              onChange={(e) => onChange(e)}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Senin</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Selasa</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Rabu</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Kamis</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Jum'at</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Sabtu</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Minggu</span>
          </label>
        </div>
        <div class="w-full flex">
          <Button
            isPrimary
            hasShadow
            hasRounded
            className="ml-auto md:mx-auto mx-10"
            onClick={() => console.log(senin)}
          >
            Finist
          </Button>
        </div>
      </div>
    </>
  );
}

export default Days;
