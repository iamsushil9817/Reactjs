import React from "react";
import Search from "../Components/Search";
import Header from "../Components/Header";
import IntroPost from "../Components/IntroPost";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";
import Form from "../Components/Form";

const Home = () => {
  return (
    <div>
      <Header />
      <Search />
      <IntroPost />
      <Blogs />
      <Footer />
      <Form />
    </div>
  );
};

export default Home;
