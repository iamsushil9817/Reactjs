import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";

const Products = () => {
  // const navigate = useNavigate();
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
    return <Loading />;
  }

  return (
    <div className="mx-auto pb-4 w-[88%]">
      <h1 className=" font-bold ">Products...</h1>
      {error && <p> Error :{error}</p>}
      <div className=" grid grid-cols-3 gap-4  ">
        {product.map((prod) => {
          return (
            <div
              className="   bg-white shadow-md rounded-lg p-4 border "
              key={prod.id}
            >
              <div className="flex justify-center">
                <img src={prod.images} className="h-52" />
              </div>
              <h1 className=" text-2xl mb-2">{prod.title}</h1>
              <Link to={`/proddetails/${prod.id}`}>
                <button
                  className="bg-blue-600 px-3 py-2 text-white rounded-lg"
                  // onClick={() => navigate(`/proddetails/${prod.id}`)}
                >
                  More Details...
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
