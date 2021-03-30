import React from "react";
import propTypes from "prop-types";
import GameLink from "./GameLink";

const ColumnSesion = ({ eps, sesion, currentSesion, currentEps }) => {
  return (
    <div className="border p-5 w-min rounded-lg mb-5">
      <h3
        className={`${
          parseInt(sesion.content) <= currentSesion
            ? "text-green-900"
            : "text-gray-400"
        } font-light text-4xl `}
      >
        {sesion.title}
      </h3>
      <div className="grid justify-items-stretch grid-cols-1 mx-auto w-72 py-5">
        {sesion.epsId.map((epsId) => {
          return (
            <GameLink
              currentEps={currentEps}
              currentSesion={currentSesion}
              key={eps[epsId].id}
              sesionContent={sesion.content}
              epsId={eps[epsId].content}
            />
          );
        })}
      </div>
    </div>
  );
};

ColumnSesion.propTypes = {
  eps: propTypes.object,
  sesion: propTypes.object,
};

export default ColumnSesion;
