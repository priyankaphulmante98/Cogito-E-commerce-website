import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import Styles from "../Styles/Contact.module.css";


function Contact() {
  const [user, setuser] = useState({});
  console.log(user, "user");

  useEffect(() => {
    const { userId } = JSON.parse(localStorage.getItem("token"));
    axios
      .get(`https://fundlo.onrender.com/auth/user/${userId}`)
      .then((res) =>{
        setuser(res.data)
        console.log(res.data)
      });
  }, []);

  return (
    <div className={Styles.form}>
      <div>
        <div className={Styles.logo}>
          <img
            id={Styles.chitr}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuc_Y0ghbLZVqNF_sa14cLJaKWHMRF5eyxQ&usqp=CAU"
            alt="logo"
          />
        </div>
        <img src={user.image} alt="chitr" />
        <h5>NAME:{user?.name}</h5>
        <h6>ROLE: {user?.role}</h6>
        <h6>EMAIL: {user?.email}</h6>
      </div>
     
    </div>
  );
}

export default Contact
