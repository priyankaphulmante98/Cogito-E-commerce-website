import { Routes, Route } from "react-router-dom";
import AddProduct from "../Components/AddProduct";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Product from "../Pages/Product";
import Signup from "../Pages/Signup";
import SingleProduct from "../Pages/SingleProduct";


export default function AllRouter(){
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/singleproduct" element={<SingleProduct />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/admin/add" element={<AddProduct />}/>
 
    </Routes>
 
  );
}