import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import Signup from "../Pages/Signup";

export default function AllRouter(){
  return (

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
 
  );
}