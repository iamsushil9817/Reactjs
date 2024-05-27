import React, { useState } from "react";
import banner from "./../assets/banner.jpg";

const Search = () => {
  const tags = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "react",
    },
    {
      id: 3,
      name: "react native",
    },

    {
      id: 4,
      name: "angular",
    },
    {
      id: 5,
      name: "UI/UX",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex justify-center mt-7 flex-col px-[150px]">
      <img src={banner} className="rounded-2xl" />
      <div className="bg-white shadow-lg p-4 mt-[-20px] mx-[25%] rounded-lg">
        <input type="text" placeholder="search" className="outline-none" />
      </div>
      <div className="flex gap-4 justify-center mt-3">
        {tags.map((item, index) => (
          <ul
            key={item.id}
            className={`${
              index === activeIndex ? "bg-red-500" : ""
            } p-1 pb-2 rounded-md cursor-pointer hover:scale-100 hover:border-[1px] border-red-500 transition-all duration-100 ease-in-out`}
            onClick={() => setActiveIndex(index)}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Search;
