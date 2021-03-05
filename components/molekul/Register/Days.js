import React from "react";
import { useState } from "react";
import Button from "../../atom/Button";

function Days() {
  const [senin, setSenin] = useState(false);
  const [selasa, setSelasa] = useState(false);
  const [rabu, setRabu] = useState(false);
  const [kamis, setKamis] = useState(false);
  const [jumat, setJumat] = useState(false);
  const [sabtu, setSabtu] = useState(false);
  const [minggu, setMinggu] = useState(false);

  const submitDays = () => {
    let days = [];
    if (senin) days.push("senin");
    if (selasa) days.push("selasa");
    if (rabu) days.push("rabu");
    if (kamis) days.push("kamis");
    if (jumat) days.push("jumat");
    if (sabtu) days.push("sabtu");
    if (minggu) days.push("minggu");
    console.log(days);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-4/5">
        <div class="grid gap-4">
          <label className="inline-flex items-center mt-3">
            <input
              onChange={() => setSenin(!senin)}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Senin</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              onChange={() => setSelasa(!selasa)}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Selasa</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              onChange={() => setRabu(!rabu)}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Rabu</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              onChange={() => setKamis(!kamis)}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Kamis</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              onChange={() => setJumat(!jumat)}
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Jum'at</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              onChange={() => setSabtu(!sabtu)}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Sabtu</span>
          </label>
          <label className="inline-flex items-center mt-3">
            <input
              onChange={() => setMinggu(!minggu)}
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600"
            />
            <span className="ml-2 text-gray-700 text-xl">Minggu</span>
          </label>
        </div>
      </div>
      <div class="w-full flex">
        <Button
          isPrimary
          hasShadow
          hasRounded
          className="ml-auto md:mx-auto mx-10"
          onClick={submitDays}
        >
          Finish
        </Button>
      </div>
    </>
  );
}

export default Days;
