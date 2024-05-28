import React, { useEffect, useState } from "react";

const Category = () => {
  const [categorys, setCategorys] = useState([]);

  const fetchedbycategory = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const json = res.json();
      setCategorys(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchedbycategory();
  }, []);

  return (
    <div className="container mx-auto w-[80%]">
      <div>
        <h1>{categorys.category}</h1>
        {/* <p>{categorys.description}</p> */}
      </div>
    </div>
  );
};

export default Category;
