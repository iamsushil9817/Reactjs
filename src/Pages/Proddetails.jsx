import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Proddetails = () => {
  const { id } = useParams();
  useEffect(() => {
    const updatebypid = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const json = await res.json();
        console.log(json.products);
      } catch (error) {
        console.log(error);
      }
    };
    updatebypid();
  });

  return <div>Proddetails</div>;
};

export default Proddetails;
