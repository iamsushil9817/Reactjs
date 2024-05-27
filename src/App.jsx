// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Blogdetails from "./Pages/Blogdetails";
import Header from "./Components/Header";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="mt-5 mb-3">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<Blogdetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
