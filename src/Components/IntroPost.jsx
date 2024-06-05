import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";
import Loading from "./Loading";
// const { Meta } = Card;

const IntroPost = ({ getvalue }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const API = "https://fakestoreapi.com/products";

  const fetchapidata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
      // console.log(data);
      // setFilteredPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchapidata(API);
  }, []);

  useEffect(() => {
    const fetchedbysearch = posts.filter((post) => {
      return post.title.toLowerCase().includes(getvalue.toLowerCase());
    });
    setFilteredPosts(fetchedbysearch);
  }, [getvalue, posts]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer ">
        {filteredPosts.map((post) => (
          <Link key={post.id} to={`/details/${post.id}`}>
            <div className="bg-white shadow-md rounded-lg p-4 ">
              <div className="flex justify-center">
                <img src={post.image} className=" h-52 flex justify-center  " />
              </div>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              {/* <p className="text-gray-700">{post.description}</p> */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default IntroPost;
