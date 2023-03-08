import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'

function Contact() {
const [user,setuser]=useState({})
console.log(user,'user')



    useEffect(()=>{
        const {userId} = JSON.parse(localStorage.getItem('token'))
        axios.get(`http://localhost:8080/auth/user/${userId}`).then(res=>setuser(res.data))

    },[])
    
    
    return (
      
        <div className="userForm" id="form">
             
            <img style={{borderRadius:"50%", height:"300px", width:"300px", textAlign:"center", alignItems:"center"}}
             src={user?.image} alt=""/>
             <h3>NAME:{user?.name}</h3>
             <h3>ROLE: {user?.role}</h3>
             <h3>email: {user?.email}</h3>
           
   
           
     </div>
            
     
    )
}

export default Contact
