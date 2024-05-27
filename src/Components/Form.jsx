import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
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
    console.log(json);
  };
  createPost();

  const handlechange = (e) => {
    const Data = { ...data };
    Data[e.target.id] = e.target.value;
    setData(Data);
    console.log(Data);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex  justify-center mt-5 mb-56"
      onSubmit={(e) => handlesubmit(e)}
    >
      <div>
        <label htmlFor="title">TItle</label>
        <input
          type="text"
          id="title"
          onChange={(e) => handlechange(e)}
          value={data.title}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="text"
          id="price"
          onChange={(e) => handlechange(e)}
          value={data.price}
        />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input
          type="text"
          id="description"
          onChange={(e) => handlechange(e)}
          value={data.description}
        />
      </div>
      <div>
        <label htmlFor="image">image</label>
        <input
          type="text"
          id="image"
          onChange={(e) => handlechange(e)}
          value={data.image}
        />
      </div>
      <div>
        <label htmlFor="category">category</label>
        <input
          type="text"
          id="category"
          onChange={(e) => handlechange(e)}
          value={data.category}
        />
      </div>
      <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500">
        submit
      </button>
    </form>
  );
};

export default Form;
