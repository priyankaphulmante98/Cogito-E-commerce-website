import React, { useContext } from 'react'
import { useState} from 'react'
import styles from '../Styles/Login.module.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { ColorContext } from "../Context/ColorContext";
const obj = {
  email: "",
  password: "",
};

function Login() {
  const { ChangeColor } = useContext(ColorContext);
  const [form, setForm] = useState(obj);
  const [users, setUsers] = useState([]);
  // const [token, setToken] = useState(null);
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    if (!form.email || !form.password) {
      alert("please fill all the data");
    } else {
      axios
        .post("http://localhost:8080/auth/login", form)
        .then((res) => {
          alert(res.data.message);
          console.log(res.data);

          localStorage.setItem(
            "token",
            JSON.stringify({ token: res.data.token, role: res.data.role,userId:res.data.userId })
          );

          setToken({ token: res.data.token, role: res.data.role });

          ChangeColor();
          if (res.data.role == "admin") {
            // adminPage
            navigate("/admin/add");
          } else {
            // setToken(res.data.token);

            navigate("/product");
          }
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className={styles.login}>
      <form id={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.logo}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWvlomyP-g7nvShNiPqEDo3o9dd6ApBAh8w&usqp=CAU"
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
