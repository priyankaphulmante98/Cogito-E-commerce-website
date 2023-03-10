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

      <div id={Styles.logo}>
          <img
            id={Styles.chitr}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpc1z1KfdTErbc_A0_dNFg8E1rN8jgHe5M8w&usqp=CAU"
            alt="logo"
          />
      </div>
    
        <Link id={Styles.home} to="/"><i  style={{fontSize:"25px"}} class="fa-solid fa-house"></i>&nbsp; HOME</Link>
       
        </span>
        
        <div id={Styles.rightBox}>
        <Link to='/contact'><i  style={{fontSize:"25px"}}class="fa-solid fa-user"></i></Link>
        
        <Link to="/cart"><i style={{fontSize:"25px"}} class="fa-solid fa-cart-plus"></i></Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGNUP</Link>
       {token?.role === "admin" &&  <Link to="/admin/add">ADMIN</Link>}
       </div>
     
        
             
               


    </div>
  )
}

export default Navbar
