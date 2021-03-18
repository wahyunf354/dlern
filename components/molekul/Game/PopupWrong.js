import propTypes from "prop-types";
import Fade from "react-reveal/Fade";
import Button from "../../atom/Button";

const PopupCorrect = ({ handleClickNext }) => {
  return (
    <>
      <div className="absolute inset-0 bg-gray-200 z-20 opacity-50"></div>
      <Fade bottom>
        <div className="p-5 md:18 flex justify-between items-center absolute text-blue-900 bg-red-400 inset-x-0 bottom-0 bg-white h-36 rounded-lg m-4 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 mr-5 w-12 text-blue-900"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="font-bold text-xl">Das ist falsch!</p>
            <p>Itu salah</p>
          </div>
          <Button
            className="self-end justify-self-start"
            onClick={handleClickNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-8 w-8 text-blue-900"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </Fade>
    </>
  );
};

PopupCorrect.propTypes = {
  handleClickNext: propTypes.func.isRequired,
};

export default PopupCorrect;