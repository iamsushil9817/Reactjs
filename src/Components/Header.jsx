import React from "react";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold">Logo</h1>
      <ul className="flex gap-4 md:gap-14">
        <li className="hover:font-bold cursor-pointer">Home</li>
        <li className="hover:font-bold cursor-pointer">About us</li>
        <li className="hover:font-bold cursor-pointer">Contact us</li>
      </ul>
      <button className="bg-red-500 rounded-full text-white flex p-2 items-center mr-3">
        Subscribe <TbBrandYoutubeFilled className="ml-3" />
      </button>
    </div>
  );
};

export default Header;
