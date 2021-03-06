import React from "react";
import TimeField from "react-simple-timefield";
import { useState } from "react";
import Button from "../../atom/Button";

function Hour({ onChange, value }) {
  const handleChange = (event, time) => {
    const target = {
      target: {
        name: "hour",
        value: time,
      },
    };

    onChange(target);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-3/4 mb-24">
        <TimeField
          value={value.hour}
          onChange={handleChange}
          style={{
            border: "3px solid #F05A20",
            fontSize: 50,
            width: 145,
            padding: "5px 8px",
            color: "#999",
            borderRadius: 4,
          }}
        />
      </div>
    </>
  );
}

export default Hour;
