import React, { useState } from "react";

const Fields = () => {
  const [store, setStore] = useState({
    name: "",
    password: "",
    email: "",
    intersted: "",
    gender: "",
    age: "",
  });

  const handlechange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log(value, checked);
    setStore((prevStore) => ({
      ...prevStore,
      [name]: type === "checkbox" ? (checked ? value : "") : value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    alert(
      `The data is:\nName: ${store.name}\nPassword: ${store.password}\nEmail: ${store.email}\nInterested in: ${store.intersted}\nGender: ${store.gender}\nAge: ${store.age}`
    );
  };

  return (
    <form
      className="container mx-auto w-[40%] bg-slate-600 flex flex-col items-center text-white rounded-md"
      onSubmit={(e) => handlesubmit(e)}
    >
      <h1 className="mt-2 text-2xl">All Fields</h1>
      <div className="m-2">
        <div>
          <label htmlFor="name">Name:</label>
        </div>
        <div>
          <input
            type="text"
            className="text-black"
            onChange={(e) => handlechange(e)}
            name="name"
            value={store.name}
          />
        </div>
      </div>
      <div className="m-2">
        <div>
          <label htmlFor="password">Password:</label>
        </div>
        <div>
          <input
            type="password"
            className="text-black"
            onChange={(e) => handlechange(e)}
            name="password"
            value={store.password}
          />
        </div>
      </div>
      <div className="m-2">
        <div>
          <label htmlFor="email">Email:</label>
        </div>
        <div>
          <input
            type="email"
            className="text-black"
            onChange={(e) => handlechange(e)}
            name="email"
            value={store.email}
          />
        </div>
      </div>
      <div className="m-2">
        <div>
          <label htmlFor="intersted">Interested in:</label>
        </div>
        <div>
          <select
            className="text-black"
            onChange={(e) => handlechange(e)}
            name="intersted"
            value={store.intersted}
          >
            <option value="">Please choose wisely</option>
            <option value="reactjs">Reactjs</option>
            <option value="nodejs">Nodejs</option>
            <option value="dotnet">Dotnet</option>
            <option value="csharp">CSharp</option>
          </select>
        </div>
      </div>
      <div className="m-2">
        <div>
          <input
            type="checkbox"
            id="male"
            name="gender"
            value="Male"
            onChange={(e) => handlechange(e)}
            checked={store.gender === "Male"}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="female"
            name="gender"
            value="Female"
            onChange={(e) => handlechange(e)}
            checked={store.gender === "Female"}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="others"
            name="gender"
            value="Others"
            onChange={(e) => handlechange(e)}
            checked={store.gender === "Others"}
          />
          <label htmlFor="others">Others</label>
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="age">Age</label>
        </div>
        <div>
          <input
            type="range"
            min={0}
            max={100}
            onChange={(e) => handlechange(e)}
            name="age"
            value={store.age}
          />
          <span>{store.age}</span>
        </div>
      </div>
      <div className="m-2">
        <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Fields;
