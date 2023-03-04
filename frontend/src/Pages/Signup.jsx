import React from 'react'
import { useState } from 'react';
// import { useEffect } from 'react';

const obj ={
  image:"",
  name:"",
  email:"",
  password:"",
}

function Signup() {
  const [form, setForm] = useState(obj)

  function handleChange(e){
  const {name, value} = e.target
  setForm({...form, [name]:value});
                        
  }

  function handleSubmit(e){
    e.preventDefault();
    // fetch(`http://localhost:8080/auth/user`).then((res) => res.json()).then((res)=> setForm(res));
    console.log(form)
  //  AddDatauser(form)
  }

  // function AddDatauser(e){
  //   fetch(`http://localhost:8080/auth/user`,{
  //     method:"POST",
  //     body:JSON.stringify(form),
  //     headers:{
  //       "Content-Type":"application/json",
  //     },
  //   }).then((res) => alert("user signup is sucessfully"));
  // }

  // useEffect(() => {
  //  AddDatauser()
  // })

  return (
    <div>
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpc1z1KfdTErbc_A0_dNFg8E1rN8jgHe5M8w&usqp=CAU" alt="logo"/>
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
