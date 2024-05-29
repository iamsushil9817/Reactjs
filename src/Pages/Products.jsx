import React, { useEffect, useState } from "react";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchedapi = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products", {
          method: "GET",
        });
        const json = await res.json();
        // console.log(json.products);
        setProduct(json.products);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchedapi();
  }, []);
  if (loading) {
    return <p className="text-2xl">Loading...</p>;
  }

  return (
    <div className="mx-auto pb-4 w-[88%]">
      <h1 className=" font-bold ">Products...</h1>
      {error && <p> Error :{error}</p>}
      <div className=" grid grid-cols-3 gap-4">
        {product.map((prod) => {
          return (
            <div className=" p-4  bg-slate-500 rounded-md " key={prod.id}>
              <h1 className="text-white">{prod.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
