import { Routes, Route } from "react-router-dom";
import AddProduct from "../Components/AddProduct";
import AllProducts from "../Components/AllProducts";
import AdminPage from "../Pages/AdminPage";
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
      <Route path="/admin" element={<AdminPage />}/>
      <Route path="/admin/add" element={<AddProduct />}/>
      <Route path="/admin/all" element={<AllProducts />}/>
    </Routes>
 
  );
}