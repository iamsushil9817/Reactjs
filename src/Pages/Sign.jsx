import React, { useEffect, useState } from "react";

const Sign = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const loginapi = async () => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: login.username,
          password: login.password,
        }),
      });
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const handlelogin = (e) => {
    const Login = { ...login };
    Login[e.target.id] = e.target.value;
    setLogin(Login);
    // console.log(Login);
  };
  const handleloginsubmit = (e) => {
    e.preventDefault();
    loginapi();
  };

  return (
    <form
      className="flex flex-col items-center mx-auto w-[30%] bg-slate-700 rounded-xl"
      onSubmit={(e) => handleloginsubmit(e)}
    >
      <div>
        <div className="mb-2">
          <label className="text-white" htmlFor="username">
            Username:
          </label>
        </div>
        <div>
          <input
            className="rounded-md "
            type="text"
            id="username"
            onChange={(e) => handlelogin(e)}
            value={login.username}
          />
        </div>
      </div>
      <div className="mb-2 mt-2">
        <div className="mb-2">
          <label className="text-white" htmlFor="password">
            Password:
          </label>
        </div>
        <div>
          <input
            className="rounded-md "
            type="text"
            id="password"
            onChange={(e) => handlelogin(e)}
            value={login.password}
          />
        </div>
      </div>
      <div className="mb-2">
        <button className="text-white bg-green-600 p-2 rounded-md hover:font-bold">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Sign;
