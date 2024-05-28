import React, { useState } from "react";
import Search from "../Components/Search";
import IntroPost from "../Components/IntroPost";
// import Blogs from "../Components/Blogs";
// import Footer from "../Components/Footer";

const Home = () => {
  const [getvalue, setGetvalue] = useState("");
  const getdata = (data) => {
    setGetvalue(data);
  };

  return (
    <div>
      <Search getdata={getdata} />
      <IntroPost getvalue={getvalue} />
      {/* <Blogs />
      <Footer /> */}
    </div>
  );
};

export default Home;
