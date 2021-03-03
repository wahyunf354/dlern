import React from "react";
import TimeField from "react-simple-timefield";
import { useState } from "react";
import Button from "../../atom/Button";

function Hour() {
  const [time, setTime] = useState("00:00");

  return (
    <>
      <div className="flex flex-col justify-center items-center h-3/4">
        <TimeField
          value={time}
          onChange={(e) => setTime(e.target.value)}
          style={{
            border: "3px solid #F05A20",
            fontSize: 50,
            width: 145,
            padding: "5px 8px",
            color: "#333",
            borderRadius: 4,
          }}
        />
      </div>
      <div className="w-full flex">
        <Button
          onClick={() => console.log(time)}
          isPrimary
          hasShadow
          hasRounded
          className="mx-auto"
        >
          Lanjut
        </Button>
      </div>
    </>
  );
}

export default Hour;
