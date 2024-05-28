// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Blogdetails from "./Pages/Blogdetails";
import Header from "./Components/Header";
// import Contact from "./Pages/Contact";
import Form from "./Components/Form";
import Category from "./Pages/Category";
import Sign from "./Pages/Sign";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="mt-5 mb-3">
        <Header titleone="Home" titletwo="SignIn" titlethree="Form" />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Blogdetails />}></Route>
        <Route path="/sign" element={<Sign />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/category" element={<Category />}></Route>
      </Routes>
    </>
  );
}

export default App;
