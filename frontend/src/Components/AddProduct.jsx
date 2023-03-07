import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

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
   axios.post(`http://localhost:8080/product`,data).then((res) => {alert("product added sucessfully") 
   getData()})

  }

async function getData() {
  let res = await axios.get(`http://localhost:8080/product`);
  console.log(res.data,"dataaaaaaaaaaaaaaaaaaaaa");
  setgData(res.data);
}

function handleDelete(id) {
  try {
    axios.delete(`http://localhost:8080/product/${id}`)
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
    <form id="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="logo">
        <img style={{height:"60px", width:"250px"}}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqhLeUXcpGhNJAJTl2SpCzD9qwiXNZV_XpA&usqp=CAU"
          alt="logo"
        />
      </div>
      <input
        type="src"
        placeholder="image"
        name="image"
        onChange={(e) => handleChage(e)}
       required="true"/>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={(e) => handleChage(e)}
        required="true" />
      <input
        type="text"
        placeholder="desc"
        name="desc"
        onChange={(e) => handleChage(e)}
        required="true" />
      <input
        type="text"
        placeholder="price"
        name="price"
        onChange={(e) => handleChage(e)}
        required="true"/>
      <select name="category" onChange={(e) => handleChage(e)}>
        <option value="">Category</option>
        <option value="jewellery">Jewellery</option>
        <option value="cloths">Cloths</option>
        <option value="shoes">Shoes</option>
        <option value="books">Books</option>
      </select>
      <input
        type="Submit"
        style={{
          marginTop: "20px",
          border: "2px solid blue",
          backgroundColor: "white",
          color: "blue",
        }}
      />
    </form>

    <div id="container">
      {gdata?.map((e, i) => {
        return (
          <div id="box" key={i}>
            <img src={e.image} alt="chi" />
            <h4>{e.price}</h4>
            <h3>{e.category}</h3>
            <h3>{e.title}</h3>
            <p>{e.desc}</p>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Modal />
              <button
                type="button"
                className="btn btn-outline-primary ms -auto"
                onClick={() => handleDelete(e._id)}>
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
