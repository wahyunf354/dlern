import React, { useState } from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import { Datepicker, Page, setOptions } from "@mobiscroll/react";

setOptions({
  theme: "material",
  themeVariant: "light",
});

function Hour({ onChange, value }) {
  const [time, setTime] = useState(null);
  const handleChange = (event) => {
    const target = {
      target: {
        name: "hour",
        value: event.valueText,
      },
    };
    setTime(event.value);
    onChange(target);
  };
  return (
    <div className=" flex flex-col justify-center items-center h-3/4 mb-5">
      <Datepicker
        controls={["time"]}
        timeFormat="HH:mm"
        onChange={handleChange}
        display="inline"
        value={time}
        inputProps={{
          label: "24 hour picker",
          labelStyle: "stacked",
          inputStyle: "outline",
          placeholder: "Please Select...",
        }}
      />
    </div>
  );
}

export default Hour;
