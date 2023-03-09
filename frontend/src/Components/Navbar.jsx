import React, { useContext } from 'react'
import {useState}  from "react" 
import Styles from '../Styles/Navbar.module.css'
import { Link }from  'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { ColorContext } from '../Context/ColorContext'



function Navbar() {

const {bg} = useContext(ColorContext)
    // let token = JSON.parse(localStorage.getItem('token')) || {}
    const {token, setToken} = useContext(AuthContext)

  return (
    <div id={Styles.Navbar} style={{backgroundColor:bg}}>
      <span style={{width:"400px", display:"flex", justifyContent:"space-around"}}>
      
        <Link to="/"><i style={{fontSize:"35px"}} class="fa-solid fa-house"></i></Link>
        <Link to="/singleproduct"><i style={{fontSize:"35px"}} class="fa-brands fa-product-hunt"></i></Link>
        <Link to='/contact'><i  style={{fontSize:"35px"}}class="fa-solid fa-user"></i></Link>
        <Link to="/cart"><i style={{fontSize:"35px"}} class="fa-solid fa-cart-plus"></i></Link>
        </span>
        <div style={{width:"400px", display:"flex", flexDirection:"row-reverse", justifyContent:'space-around', marginLeft:"900px"}}>
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGNUP</Link>
       {token.role === "admin" &&  <Link to="/admin/add">ADMIN</Link>}
       </div>
        <div>
         
      </div>
        
             
               


    </div>
  )
}

export default Navbar
