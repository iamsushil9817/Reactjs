import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const IntroPost = () => {
  // const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  let API = "https://fakestoreapi.com/products";
  const fetchapidata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchapidata(API);
  });
  if (loading) {
    return <h2 className="text-2xl font-bold">Loading...</h2>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
        {posts.map((post) => (
          <Link key={post.id} to={`/details/${post.id}`}>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IntroPost;
