import React from "react";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="flex justify-between items-center ">
      <h1 className="text-2xl font-bold">Logo</h1>
      <ul className="flex gap-4 md:gap-14">
        <Link to={"/"} className="hover:font-bold cursor-pointer">
          {props.titleone}
        </Link>
        <Link to={"/sign"} className="hover:font-bold cursor-pointer">
          {props.titletwo}
        </Link>
        <Link to={"/form"} className="hover:font-bold cursor-pointer">
          {props.titlethree}
        </Link>
      </ul>
      <button className="bg-red-500 rounded-full text-white flex p-2 items-center mr-3">
        Subscribe <TbBrandYoutubeFilled className="ml-3" />
      </button>
    </div>
  );
};

export default Header;
