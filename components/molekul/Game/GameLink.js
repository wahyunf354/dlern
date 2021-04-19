import Button from "../../atom/Button";
import propTypes from "prop-types";

const GameLink = ({ epsId, currentEps, togglePopup }) => {
  return currentEps <= epsId ? (
    <>
      {currentEps >= epsId || epsId <= 5 ? (
        <Button
          type="link"
          href={`/latihan/soal?eps=${epsId}`}
          hasShadow
          className={`flex ${
            epsId % 2 == 0 ? "justify-self-end" : "justify-self-start"
          } justify-center 
           bg-green-900 text-white
           
       border border-green-900 items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24`}
        >
          {epsId}
        </Button>
      ) : (
        <Button
          onClick={() => togglePopup()}
          hasShadow
          className={`flex ${
            epsId % 2 == 0 ? "justify-self-end" : "justify-self-start"
          } justify-center bg-white text-green-900 border border-green-900 items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24`}
        >
          {epsId}
        </Button>
      )}
    </>
  ) : (
    <div
      className={`flex ${
        epsId % 2 == 0 ? "justify-self-end" : "justify-self-start"
      } justify-center ${
        currentEps >= epsId || epsId <= 5
          ? "bg-green-900 text-white"
          : "bg-white text-green-900"
      } border border-green-900 items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    </div>
  );
};

GameLink.propTypes = {
  currentEps: propTypes.number.isRequired,
  epsId: propTypes.number.isRequired,
};

export default GameLink;
