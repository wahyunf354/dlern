import propTypes from "prop-types";
import Fade from "react-reveal/Fade";
import Button from "../../atom/Button";

const PopupCorrect = ({ togglePopup }) => {
  return (
    <Button onClick={() => togglePopup()}>
      <div className="fixed inset-0 bg-gray-200 z-20 opacity-50"></div>
      <Fade bottom>
        <div className="p-5 text-center absolute text-blue-900 bg-red-400 inset-x-0 bottom-0 bg-white rounded-lg m-4 z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-12 mx-auto w-12 text-blue-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="font-bold text-xl">
              Kamu membutuhkan lebih banyak koin!{" "}
            </p>
            <p>
              Mainkan lebih banyak episode latihan dan jawab dengan benar untuk
              mendapat lebih banyak koin!
            </p>
          </div>
        </div>
      </Fade>
    </Button>
  );
};

export default PopupCorrect;
