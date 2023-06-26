import React from "react";
import { IconButton } from "../components";
const Footer = () => {
  return (
    <div className="flex justify-between border-t-gray-100 border-t py-2 px-4 items-center">
      <IconButton icon="AiFillHome" />
      <IconButton icon="AiOutlineShop" />
      <IconButton icon="AiFillStar" />
      <IconButton icon="AiFillMessage" />
      <IconButton icon="FaUser" />
    </div>
  );
};

export default Footer;
