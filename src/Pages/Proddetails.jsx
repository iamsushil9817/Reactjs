import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";

const Proddetails = () => {
  const { id } = useParams();
  const [pone, setPone] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const updatebypid = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const json = await res.json();
        // console.log(json);
        setPone(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    updatebypid();
  }, [id]);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto w-[50%] ">
      <div className="bg-white p-4">
        <div className="flex justify-center">
          <img src={pone.images} className="h-64" />
        </div>
        <h1 className="text-3xl">{pone.title}.</h1>
        <h1 className="text-3xl">Price:${pone.price}</h1>
        <p className="text-xl">{pone.description}.</p>
      </div>
    </div>
  );
};

export default Proddetails;
