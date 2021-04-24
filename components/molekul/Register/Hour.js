import React, { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, setOptions } from "@mobiscroll/react";

setOptions({
  theme: "material",
  themeVariant: "light",
});

function Hour({ onChange, value }) {
  const handleChange = (event) => {
    onChange(event);
  };
  return (
    <div className=" flex flex-col justify-center items-center h-3/4 mb-5">
      <input
        placeholder="12:00"
        type="time"
        name="hour"
        value={value.hour}
        onChange={handleChange}
      />
    </div>
  );
}

export default Hour;
