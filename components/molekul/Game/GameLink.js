import Button from "../../atom/Button";
import propTypes from "prop-types";

const GameLink = ({ epsId, currentEps }) => {
  return (
    <Button
      type="link"
      href={`/latihan/soal?eps=${epsId}`}
      isDisabled={currentEps >= epsId ? false : true}
      hasShadow
      className={`flex ${
        epsId % 2 == 0 ? "justify-self-end" : "justify-self-start"
      } justify-center ${
        currentEps >= epsId
          ? "bg-green-900 text-white"
          : "bg-white text-green-900"
      } border border-green-900 items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24`}
    >
      {epsId}
    </Button>
  );
};

GameLink.propTypes = {
  currentEps: propTypes.number.isRequired,
  epsId: propTypes.number.isRequired,
};

export default GameLink;
