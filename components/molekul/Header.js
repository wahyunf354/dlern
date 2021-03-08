import React, { useState } from "react";
import Button from "../atom/Button";
import Image from "next/image";
import Fade from "react-reveal/Fade";

function Menu({ toggleShowMenu }) {
  return (
    <>
      <div className="absolute z-10 top-0 bg-opacity-50 bottom-0 left-0 right-0 bg-gray-200"></div>
      <Fade left>
        <div className="h-screen w-3/4 md:w-1/4 z-20 px-5 py-5 flex flex-col items-stretch absolute top-0 left-0 bg-white">
          <Button onClick={toggleShowMenu} className="self-end">
            <svg
              className="h-6 w-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
          <ul className="divide-y divide-yellow-light grid grid-cols-1">
            <li className="py-3 text-gray-700">
              <Button type="link" href="/kosa-kata">
                Vocab
              </Button>
            </li>
            <li className="py-3 text-gray-700">
              <Button type="link" href="/kosa-kata">
                Games
              </Button>
            </li>
            <li className="py-3 text-gray-700">
              <Button type="link" href="/kosa-kata">
                Dark Mode(soon)
              </Button>
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
          alt="D'lern"
          width={50}
          height={50}
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
            className="h-6 w-6 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
            width={36}
            height={36}
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

export default Header;
