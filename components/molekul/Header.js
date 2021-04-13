import React, { useState } from "react";
import Button from "../atom/Button";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import propTypes from "prop-types";
import firebase from "../../config/firebase";
import useRouter from "next/router";
function Menu({ toggleShowMenu }) {
  const router = useRouter;

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push("/welcome");
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  };

  return (
    <>
      <div className="absolute z-10 top-0 bg-opacity-50 bottom-0 left-0 right-0 bg-gray-200"></div>
      <Fade left>
        <div className="h-screen w-3/4 md:w-1/4 z-20 px-5 py-5 flex flex-col items-stretch absolute top-0 left-0 bg-white">
          <Button onClick={toggleShowMenu} className="self-end">
            <svg
              className="h-8 w-8 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
          <ul className="divide-y divide-yellow-light grid grid-cols-1">
            <li className="py-3 text-gray-700">
              <Button type="link" href="/home">
                Home
              </Button>
            </li>
            <li className="py-3 text-gray-700">
              <Button type="link" href="/kosa-kata">
                Vocab
              </Button>
            </li>
            <li className="py-3 text-gray-700">
              <Button type="link" href="/games">
                Games
              </Button>
            </li>
            <li className="py-3 text-gray-700">
              <Button type="link" href="">
                Dark Mode(soon)
              </Button>
            </li>
            <li className="py-3 text-gray-700">
              <Button onClick={handleLogout}>log out</Button>
            </li>
          </ul>
        </div>
      </Fade>
    </>
  );
}

function Header(props) {
  const [show, isShow] = useState(false);
  const toggleShowMenu = () => {
    isShow(!show);
  };

  if (props.isRight) {
    return (
      <nav className="flex px-8 justify-between py-6">
        <Image
          src="/assets/logo/logo.png"
          alt="De'lern"
          width={60}
          height={60}
        />
      </nav>
    );
  }

  if (props.isFull) {
    return (
      <header className="flex justify-between py-3 px-3 md:px-5 border-b-2 border-grey-600 w-full">
        <Button onClick={toggleShowMenu} className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </Button>
        {show && <Menu toggleShowMenu={toggleShowMenu} />}
        <Button
          type="link"
          href="/landing-page"
          className="text-2xl font-bold text-yellow"
        >
          <Image
            src="/assets/logo/logo.png"
            alt="D'lern"
            width={48}
            height={48}
          />
        </Button>
      </header>
    );
  }

  if (props.isBack) {
    return (
      <header className="flex justify-between py-3 px-3 md:px-5 border-b-2 border-grey-600 w-full">
        <Button className="flex items-center" type="link" href={props.href}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-8 w-8 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Button>
        <Button
          type="link"
          href="/landing-page"
          className="text-2xl font-bold text-yellow"
        >
          <Image
            src="/assets/logo/logo.png"
            alt="D'lern"
            width={48}
            height={48}
          />
        </Button>
      </header>
    );
  }

  return (
    <header className="flex justify-center items-center py-4 border-b-2 border-grey-600 w-full">
      <Button
        type="link"
        href="index"
        className="text-2xl font-bold text-yellow"
      >
        D'lern
      </Button>
    </header>
  );
}

Header.propTypes = {
  isFull: propTypes.bool,
  isBack: propTypes.bool,
  href: propTypes.string,
};

export default Header;
