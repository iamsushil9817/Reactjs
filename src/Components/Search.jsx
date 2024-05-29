import React, { useState } from "react";
import banner from "./../assets/banner.jpg";
import { Link } from "react-router-dom";

const Search = (props) => {
  const [text, setText] = useState("");

  const handlechange = (e) => {
    setText(e.target.value);
    props.getdata(e.target.value);
    // console.log(e.target.value);
  };

  const tags = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "electronics",
    },
    {
      id: 3,
      name: "jewelery",
    },
    {
      id: 4,
      name: "men's clothing",
    },

    {
      id: 5,
      name: "women's clothing",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex justify-center mt-7 flex-col px-[150px]">
      <img src={banner} className="rounded-2xl" />
      <div className="bg-white shadow-lg p-4 mt-[-20px] mx-[25%] rounded-lg">
        <input
          type="text"
          placeholder="search"
          className="outline-none"
          onChange={(e) => handlechange(e)}
          value={text}
        />
      </div>
      <div className="flex gap-4 justify-center mt-3">
        {tags.map((item, index) => (
          <Link
            key={item.id}
            to={`/category`}
            className={`${
              index === activeIndex ? "bg-red-500 text-white p-2" : ""
            } p-1 pb-2 rounded-md cursor-pointer hover:scale-100 hover:border-[1px] border-red-500 transition-all duration-100 ease-in-out`}
            onClick={() => setActiveIndex(index)}
          >
            <ul>{item.name}</ul>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
