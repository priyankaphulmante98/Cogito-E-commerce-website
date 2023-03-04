import React from 'react'
import { useState} from 'react'
// import {useEffect} from 'react'
const obj={
  email:"",
  password:""
}

function Login() {
  const [form, setForm] =useState(obj)
  const [users, setUsers] = useState([])

  function handleChange(e){
    const {name, value} = e.target;
    setForm({...form, [name]:value})

  }

  function handleSubmit(e){
    e.preventDefault()
    const {email, password} =form;
    let check= users.find((e) => e.email===email && e.password===password)
    if(check){
      alert('login is sucessfully')
      console.log(form)
      setUsers(form)
    }else{
      alert('wrong credientials');
    }
  }

  // function verify(){
  //   fetch(`http://localhost:8080/auth/user`,{
  //     method:"GET"
  //   }).then((res) => res.json()).then((res) => setUsers(res));
  // }
  
  // useEffect(() => {
  //   verify()
  // })
  return (
    <div>
   <form id="form" onSubmit={(e) => handleSubmit(e)}>

   <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpc1z1KfdTErbc_A0_dNFg8E1rN8jgHe5M8w&usqp=CAU" alt="logo"/>
        </div>
        
      <input type="text" name="email" placeholder='email' onChange={(e) => handleChange(e)}/>

      <input type="text" name="password" placeholder='password' onChange={(e) => handleChange(e)}/>
      
      <input type="submit" />
    </form>
    </div>
  )
}

export default Login
