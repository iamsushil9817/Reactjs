import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blogdetails = () => {
  const [one, setOne] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getsingleid = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const json = await res.json();
        setOne(json);
      } catch (error) {
        console.log(error);
      }
    };
    getsingleid();
  }, [id]);
  return (
    <div className="mx-auto w-[40%] rounded-sm text-white mt-8  ">
      <div className="p-2">
        <div className="flex justify-center ">
          <img src={one.image} className="h-60" />
        </div>
        <div className="mt-2">
          <h1 className="text-black font-bold text-3xl"> {one.title}.</h1>
        </div>
        <div className="mt-2">
          <p className="text-black text-xl">{one.description}.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
