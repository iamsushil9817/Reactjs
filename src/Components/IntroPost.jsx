import React, { useEffect, useState } from "react";

const IntroPost = () => {
  const [posts, setPosts] = useState([]);
  let API = "https://fakestoreapi.com/products";
  const fetchapidata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchapidata(API);
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntroPost;
