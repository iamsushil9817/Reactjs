import React, { useState } from "react";
import { useGlobalcontext } from "../context/context";

const Form = () => {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const [post, setPost] = useState([]);
  const createPost = async () => {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        price: data.price,
        description: data.description,
        image: data.image,
        category: data.category,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await res.json();
    setPost(json);
    // console.log(json);
  };

  const handlechange = (e) => {
    const Data = { ...data };
    Data[e.target.id] = e.target.value;
    setData(Data);
    // console.log(Data);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    createPost();
  };

  return (
    <div>
      <form
        className="flex flex-col items-center mx-auto w-[50%] bg-slate-600 text-white rounded-md  mt-4 "
        onSubmit={(e) => handlesubmit(e)}
      >
        <div className="m-2">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            onChange={(e) => handlechange(e)}
            value={data.title}
            className="border-solid  border-green-600 bg-slate-300 shadow text-black rounded-md"
          />
        </div>
        <div className="m-2">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            onChange={(e) => handlechange(e)}
            value={data.price}
            className="border-solid border-green-600 bg-slate-300 shadow text-black rounded-md"
          />
        </div>
        <div className="m-2">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            onChange={(e) => handlechange(e)}
            value={data.description}
            className="border-solid border-green-600 bg-slate-300 shadow text-black rounded-md"
          />
        </div>
        <div className="m-2">
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            onChange={(e) => handlechange(e)}
            value={data.image}
            className="border-solid border-green-600 bg-slate-300 shadow text-black rounded-md"
          />
        </div>
        <div className="m-2">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            onChange={(e) => handlechange(e)}
            value={data.category}
            className="border-solid border-green-600 bg-slate-300 shadow text-black rounded-md"
          />
        </div>
        <button className=" bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 w-[15%] mb-2 ml-6">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
