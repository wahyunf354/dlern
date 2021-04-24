import Button from "../../atom/Button";
import Spinner from "../../atom/Spinner";
import PropTypes from "prop-types";

const FinistGame = ({
  coin,
  reset,
  home,
  isLoading,
  handleNextEps,
  isCompelate,
}) => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 h-60 bg-yellow rounded-lg shadow-lg flex flex-col justify-center items-center">
        {isCompelate ? (
          ""
        ) : (
          <>
            <p className="text-white text-xl font-light">
              Koin yang kamu dapat
            </p>
            <h1 className="text-white font-bold text-4xl mb-4"> {coin} </h1>
          </>
        )}
        {isLoading ? (
          <div className="w-full flex justify-center items-center">
            <Spinner isSmall isWhite />
          </div>
        ) : (
          <div className="grid gap-4 grid-cols-3">
            <Button
              onClick={() => reset()}
              className="bg-white p-2"
              hasRounded
              hasShadow
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-yellow w-8 h-8 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                />
              </svg>
            </Button>
            <Button
              onClick={() => home()}
              className="bg-white p-2"
              hasRounded
              hasShadow
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-yellow w-8 h-8 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Button>
            {true && (
              <Button
                onClick={() => handleNextEps()}
                className="bg-white p-2"
                hasShadow
                hasRounded
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-yellow w-8 h-8"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

FinistGame.propTypes = {
  coin: PropTypes.number,
  reset: PropTypes.func,
  home: PropTypes.func,
  handleNextEps: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default FinistGame;
