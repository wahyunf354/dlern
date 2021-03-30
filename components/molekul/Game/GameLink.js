import Button from "../../atom/Button";
import propTypes from "prop-types";

const GameLink = ({ sesionContent, epsId }) => {
  return (
    <Button
      type="link"
      href={`/games/soal?sesion=${sesionContent}&eps=${epsId}`}
      hasShadow
      className={`flex ${
        epsId % 2 == 0 ? "justify-self-end" : "justify-self-start"
      } justify-center text-green-900 border border-green-900 items-center text-3xl md:text-4xl font-bold border-2 border-white block rounded-full w-20 h-20 md:w-24 md:h-24`}
    >
      {epsId}
    </Button>
  );
};

GameLink.propTypes = {
  sesionContent: propTypes.string.isRequired,
  epsId: propTypes.string.isRequired,
};

export default GameLink;
