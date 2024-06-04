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
import Products from "./Pages/Products";
import Fields from "./Pages/Fields";
import User from "./Pages/User";
import Admin from "./Pages/Admin";
import Signout from "./Components/Signout";
import Validate from "./Pages/Validate";
import Proddetails from "./Pages/Proddetails";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="mt-5 mb-3">
        <Header
          titleone="Home"
          titletwo="SignIn"
          titlethree="Form"
          titlefour="Products"
          titlefive="Fields"
          titlesix="User"
          titleseven="Admin"
          titleeight="Logout"
        />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Blogdetails />}></Route>
        <Route path="/sign" element={<Sign />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/field" element={<Fields />}></Route>
        <Route path="/auth" element={<User />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/signout" element={<Signout />}></Route>
        <Route path="/validate" element={<Validate />}></Route>
        <Route path="/proddetails/:id" element={<Proddetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
