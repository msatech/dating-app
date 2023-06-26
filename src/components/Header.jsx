import React from "react";
import { IconButton } from "../components";

const Header = () => {
  return (
    <div className="flex justify-between border-b-gray-100 border-b py-2 px-4 items-center">
      <IconButton icon="FaUser" />
      <h1 className="text-gray-700 text-xl font-semibold">Dating App</h1>
      <IconButton icon="AiOutlineControl" />
    </div>
  );
};

export default Header;
