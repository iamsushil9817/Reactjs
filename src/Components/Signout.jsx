import React from "react";
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const navigate = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem("bearerToken");
    navigate("/sign");
  };
  return (
    <div className="flex justify-center">
      <div>
        <button
          className="bg-red-500 px-3 py-2 rounded-md text-white   hover:bg-red-700"
          onClick={handlelogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Signout;
