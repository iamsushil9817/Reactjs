import React from "react";
import Search from "../Components/Search";
import IntroPost from "../Components/IntroPost";
// import Blogs from "../Components/Blogs";
// import Footer from "../Components/Footer";
import Form from "../Components/Form";

const Home = () => {
  return (
    <div>
      <Search />
      <IntroPost />
      <Form />
      {/* <Blogs />
      <Footer /> */}
    </div>
  );
};

export default Home;
