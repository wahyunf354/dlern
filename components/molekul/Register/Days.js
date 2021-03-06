import React from "react";
import { useState } from "react";
import InputText from "../../atom/InputText";

function Days({ onChange, value }) {
  const handleChange = (e) => {
    const target = {
      target: {
        name: e.target.name,
        value: e.target.checked,
      },
    };
    onChange(target);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-4/5 mb-24">
        <div className="grid gap-4 grid-cols-2">
          <label className="inline-flex items-center mt-3">
            <input
              name="senin"
              onChange={handleChange}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Senin</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              name="selasa"
              onChange={handleChange}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Selasa</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              name="rabu"
              onChange={handleChange}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Rabu</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              name="kamis"
              onChange={handleChange}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Kamis</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              name="jumat"
              type="checkbox"
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Jum'at</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              name="sabtu"
              onChange={handleChange}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Sabtu</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              name="minggu"
              onChange={handleChange}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Minggu</span>
          </label>
        </div>
      </div>
    </>
  );
}

export default Days;
