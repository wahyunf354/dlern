import React from "react";
import Button from "../../atom/Button";

function Header(props) {
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
