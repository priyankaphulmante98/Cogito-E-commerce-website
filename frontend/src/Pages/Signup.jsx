import React from 'react'
import { useState } from 'react';
import "../Styles/Signup.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const obj ={
  image:"",
  name:"",
  email:"",
  password:"",
}

function Signup() {
  const [form, setForm] = useState(obj)
  const navigate =useNavigate()

  function handleChange(e){
  const {name, value} = e.target
  setForm({...form, [name]:value});
                        
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(form, "ffsd");
    signupuser(form)


  }

  function signupuser(user){
    const {email,password,image,name}=user
   if(email&&password&&image&&name){
    axios.post("http://localhost:8080/auth/signup",user).then(res=>{
      
      alert(res.data.message)  
    navigate("/login")}).catch(err=>console.log(err))
   }else{
    alert("please fill all the credential")
   }
  }

  return (
    <div>
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPMdwe_k1Qah50LESaV_fZcLYf9MArCvC2NA&usqp=CAU" alt="logo"/>
        </div>
      <input type="src" name="image" placeholder='image' onChange={(e) => handleChange(e)}/>

      <input type="text"  name="name" placeholder='name' onChange={(e) => handleChange(e)}/>

      <input type="text" name="email"  placeholder="email" onChange={(e) => handleChange(e)}/>

      <input type="text"  name="password" placeholder='password' onChange={(e) => handleChange(e)}/>

      <input type="submit" />
      </form>
      

      
    </div>
  )
}

export default Signup
