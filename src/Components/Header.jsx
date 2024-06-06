import React from "react";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
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
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `hover:font-bold hover:text-orange-500 cursor-pointer ${
              isActive ? "text-orange-600 font-bold" : "null"
            }`
          }
        >
          {props.titleone}
        </NavLink>

        <NavLink
          to={"/form"}
          className={({ isActive }) =>
            `hover:font-bold  hover:text-orange-500 cursor-pointer ${
              isActive ? "text-orange-600 font-bold" : "null"
            }`
          }
        >
          {props.titlethree}
        </NavLink>
        <NavLink
          to={"/product"}
          className={({ isActive }) =>
            `hover:font-bold  hover:text-orange-500 cursor-pointer ${
              isActive ? "text-orange-600 font-bold" : "null"
            }`
          }
        >
          {props.titlefour}
        </NavLink>
        <NavLink
          to={"/field"}
          className={({ isActive }) =>
            `hover:font-bold  hover:text-orange-500 cursor-pointer ${
              isActive ? "text-orange-600 font-bold" : "null"
            }`
          }
        >
          {props.titlefive}
        </NavLink>
        {Token && (
          <NavLink
            to={"/auth"}
            className={({ isActive }) =>
              `hover:font-bold  hover:text-orange-500 cursor-pointer ${
                isActive ? "text-orange-600 font-bold" : "null"
              }`
            }
          >
            {props.titlesix}
          </NavLink>
        )}
        {Token && (
          <NavLink
            to={"/admin"}
            className={({ isActive }) =>
              `hover:font-bold  hover:text-orange-500 cursor-pointer ${
                isActive ? "text-orange-600 font-bold" : "null"
              }`
            }
          >
            {props.titleseven}
          </NavLink>
        )}
        <NavLink
          to={"/validate"}
          className={({ isActive }) =>
            `hover:font-bold  hover:text-orange-500 cursor-pointer ${
              isActive ? "text-orange-600 font-bold" : "null"
            }`
          }
        >
          Validate
        </NavLink>
        {Token ? (
          <div onClick={handlelogout} className="cursor-pointer">
            Logout
          </div>
        ) : (
          <NavLink
            to={"/sign"}
            className={({ isActive }) =>
              `hover:font-bold  hover:text-orange-500 cursor-pointer ${
                isActive ? "text-orange-600 font-bold" : "null"
              }`
            }
          >
            {props.titletwo}
          </NavLink>
        )}
        {Token && (
          <div>
            {user} {lname}
          </div>
        )}
      </ul>
      <button className="bg-red-500 rounded-full text-white flex p-2 items-center mr-3">
        Subscribe <TbBrandYoutubeFilled className="ml-3" />
      </button>
    </div>
  );
};

export default Header;
