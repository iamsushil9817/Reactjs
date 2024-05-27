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
    <div className="mx-auto w-[80%] bg-slate-500 rounded-sm text-white ">
      <div className="p-2">
        <h1>
          {" "}
          <span className="text-2xl"> Title :</span>
          {one.title}
        </h1>
        <h2>
          {" "}
          <span className="text-2xl"> Price: </span>
          {one.price}
        </h2>
        <p>
          {" "}
          <span className="text-2xl">Desc:</span>
          {one.description}
        </p>
      </div>
    </div>
  );
};

export default Blogdetails;
