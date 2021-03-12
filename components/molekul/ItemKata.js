import Button from "../../components/atom/Button";
import propTypes from "prop-types";

const ItemKata = ({ jerman, indo, img, sound, type }) => {
  const playSound = async () => {
    const audio = new Audio(sound);
    await audio.play();
  };

  if (type === "WITH_IMG")
    return (
      <Button onClick={playSound} className="p-2 border" hasRounded hasShadow>
        <div className="h-24 bg-gray-500 overflow-hidden rounded">
          <img src={img} alt={jerman} />
        </div>
        <h2 className="font-bold text-sm mt-2">{jerman}</h2>
        <p className="text-xs font-light">"{indo}"</p>
      </Button>
    );
  if (type === "NO_WITH_IMG")
    return (
      <Button
        onClick={playSound}
        className="p-2 py-4 border "
        hasRounded
        hasShadow
      >
        <h2 className="font-bold text-lg">{jerman}</h2>
        <p className="text-sm font-light">"{indo}"</p>
      </Button>
    );
};

ItemKata.propTypes = {
  jerman: propTypes.string.isRequired,
  indo: propTypes.string.isRequired,
  img: propTypes.string,
  sound: propTypes.string,
  type: propTypes.string.isRequired,
};

export default ItemKata;
