import React from "react";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useGlobalcontext } from "../context/context";

const Header = (props) => {
  const { user, lname } = useGlobalcontext();
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("bearerToken");
    navigate("/sign");
  };
  const Token = JSON.parse(localStorage.getItem("bearerToken"));
  return (
    <div className="flex justify-between items-center ">
      <h1 className="text-2xl font-bold">Logo</h1>
      <ul className="flex gap-4 md:gap-14">
        <Link to={"/"} className="hover:font-bold cursor-pointer">
          {props.titleone}
        </Link>

        <Link to={"/form"} className="hover:font-bold cursor-pointer">
          {props.titlethree}
        </Link>
        <Link to={"/product"} className="hover:font-bold cursor-pointer">
          {props.titlefour}
        </Link>
        <Link to={"/field"} className="hover:font-bold cursor-pointer">
          {props.titlefive}
        </Link>
        <Link to={"/auth"} className="hover:font-bold cursor-pointer">
          {props.titlesix}
        </Link>
        {Token && (
          <Link to={"/admin"} className="hover:font-bold cursor-pointer">
            {props.titleseven}
          </Link>
        )}
        {Token ? (
          <div onClick={handlelogout} className="cursor-pointer">
            Logout
          </div>
        ) : (
          <Link to={"/sign"} className="hover:font-bold cursor-pointer">
            {props.titletwo}
          </Link>
        )}
        {Token && (
          <div>
            {user} {lname}
          </div>
        )}
        <Link to={"/validate"} className="hover:font-bold cursor-pointer">
          Validate
        </Link>
      </ul>
      <button className="bg-red-500 rounded-full text-white flex p-2 items-center mr-3">
        Subscribe <TbBrandYoutubeFilled className="ml-3" />
      </button>
    </div>
  );
};

export default Header;
