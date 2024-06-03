import React, { useEffect, useState } from "react";
import { useGlobalcontext } from "../context/context";

const Admin = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchdupdate = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products", {
          method: "GET",
        });
        const json = await res.json();
        setProduct(json);
        // console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdupdate();
  }, []);

  const updatebyid = async (id) => {
    try {
      const upfetched = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          title: "test product",
          price: 13.5,
          description: "lorem ipsum set",
          image: "https://i.pravatar.cc",
          category: "electronic",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await upfetched.json();
      setProduct((prevproduct) =>
        prevproduct.map((item) =>
          item.id === id ? { ...item, ...json } : item
        )
      );
      console.log(product);

      // setUpdated(json);
    } catch (error) {
      console.log(error);
    }
  };

  const deletebyid = async (id) => {
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setProduct((prevproduct) =>
          prevproduct.filter((item) => item.id !== id)
        );
      } else {
        alert("failed to delete the product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleedit = (id) => {
    updatebyid(id);
  };
  const handledel = (id) => {
    deletebyid(id);
  };
  return (
    <div className="container mx-auto w-[80%]">
      <table className="min-w-full border border-solid border-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-6 py-3 border-b-2 border-black text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 border-b-2 border-black text-left text-sm leading-4 text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr
              key={item.id}
              className="bg-white border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                {item.title}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 "
                  onClick={() => handleedit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handledel(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Admin;
