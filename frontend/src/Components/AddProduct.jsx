import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import Styles from '../Styles/AddProduct.module.css'

function AddProduct() {
  const [gdata, setgData] = useState([]);
  const [data, setData] = useState({
    image: "",
    title: "",
    desc: "",
    price: "",
    category: ""
  });

  function handleChage(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
   axios.post(`https://fundlo.onrender.com/product`,data).then((res) => {alert("product added sucessfully") 
   getData()})

  }

async function getData() {
  let res = await axios.get(`https://fundlo.onrender.com/product`);
  console.log(res.data,"dataaaaaaaaaaaaaaaaaaaaa");
  setgData(res.data);
}

function handleDelete(id) {
  try {
    axios.delete(`https://fundlo.onrender.com/product/${id}`)
      .then((res) => {
        alert("deleted")
        getData();
      });
  } catch (err) {
    console.log(err);
  }
}

useEffect(() => {
  getData();
}, []);

return (
  <>
    <form className={Styles.form} onSubmit={(e) => handleSubmit(e)}>
      <div
        className={Styles.logo}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqhLeUXcpGhNJAJTl2SpCzD9qwiXNZV_XpA&usqp=CAU"
          alt="logo"
        />
      </div>
      <input
        type="url"
        placeholder="image"
        name="image"
        onChange={(e) => handleChage(e)}
        required="true"
      />
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={(e) => handleChage(e)}
        required="true"
      />
      <input
        type="text"
        placeholder="desc"
        name="desc"
        onChange={(e) => handleChage(e)}
        required="true"
      />
      <input
        type="text"
        placeholder="price"
        name="price"
        onChange={(e) => handleChage(e)}
        required="true"
      />
      <select name="category" onChange={(e) => handleChage(e)}>
        <option value="">Category</option>
        <option value="lipstick">Lipstik</option>
        <option value="eyelinear">Eyelinear</option>
        <option value="cream">Cream</option>
        <option value="mositure">Mositure</option>
      </select>
      <input type="Submit" />
    </form>

    <div id={Styles.container}>
      {gdata?.map((e, i) => {
        return (
          <div id={Styles.box} key={i}>
            <img src={e.image} alt="chitr" />
            <h3>{e.title}</h3>
            <h6>{e.category}</h6>
            <p>{e.desc}</p>
            <h5>{e.price}</h5>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Modal   dataa = {e}/>
              <button
                id={Styles.btn}
                type="button"
                className="btn btn-outline-primary ms -auto"
                onClick={() => handleDelete(e._id)}
              >
                <span className="fa fa-sign-in me-1"></span> DELETE
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </>
);
}

export default AddProduct;
