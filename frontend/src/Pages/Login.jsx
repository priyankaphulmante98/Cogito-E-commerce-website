import React, { useContext } from 'react'
import { useState} from 'react'
// import {useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const obj = {
  email: "",
  password: "",
};

function Login() {
  const [form, setForm] = useState(obj);
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("please fill all the data");
    } else {
      axios
        .post("http://localhost:8080/auth/login", form)
        .then((res) => {
          alert(res.data.message);
          console.log(res.data);
        

          if (res.data.role == "admin") {
            // adminPage
            navigate("/admin/add");
          } else {
            setToken(res.data.token);
            navigate("/product")
          }
        })
        .catch((err) => console.log(err));
    }
  }




  
  return (
    <div>
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwj_byyi9UwNhE26dSp2BlRa2E6mscA1BsA&usqp=CAU"
            alt="logo"
          />
        </div>

        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          name="password"
          placeholder="password"
          onChange={(e) => handleChange(e)}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default Login
