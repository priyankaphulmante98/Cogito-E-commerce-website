import React, { useContext } from 'react'
import {useState}  from "react" 
import { Link }from  'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import { ColorContext } from '../Context/ColorContext'



function Navbar() {

const {bg} = useContext(ColorContext)
    // let token = JSON.parse(localStorage.getItem('token')) || {}
    const {token, setToken} = useContext(AuthContext)

  return (
    <div id="Navbar" style={{backgroundColor:bg}}>
        <Link to="/">HOME</Link>
        <Link to="/singleproduct">PRODUCT</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGNUP</Link>
       {token.role === "admin" &&  <Link to="/admin/add">ADMIN</Link>}
        <div>
         
      </div>
        
             
               


    </div>
  )
}

export default Navbar
