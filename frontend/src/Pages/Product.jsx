import React, { useState,  useEffect } from 'react'
import axios from "axios"
import Styles from '../Styles/Product.module.css'
import { NavLink } from 'react-router-dom';


function Product() {
  
   const [data, setData] = useState([]);

    async function getData(){
      let res = await axios.get(`http://localhost:8080/product`);
      console.log(res.data);
       setData(res.data);
    }

    useEffect(() => {
       getData()
    },[])

    function handleFilter(){

    }

    return (
      <div>
  

<div id="filterSort" style={{display:"flex", justifyContent:"space-around", columnGap:"30px", width:"100%"}} >
 <select id="filter" style={{marginTop:"20px",width:"300px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} placeholder="filterBy" >
  <option value="">Filter by Category</option>
  <option value="lipstick">Furniture</option>
  <option value="powder">Clothes</option>
  <option value="cream">Electronics</option>
  <option value="eyelinear">Otros</option>
  <option value="eyebrush">Shoes</option>
 </select>

<select id="sort" style={{marginTop:"20px",width:"300px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}} placeholder="filterBy" >
<option value="">Filter by Category</option> 
<option value="asc">ASCENDING</option>
<option value="desc">DESCNDING</option>
 </select>

  </div> 
     
        <div id={Styles.container}>
            {
                data.map((e,i)=> {
                  return  <div id={Styles.box} key={i}>
                <img src={e.image} alt="chi"/>
                <h3>{e.title}</h3>
                <h6>{e.category}</h6>
                <p>{e.desc}</p>
                <h5>{e.price}</h5>
                <NavLink to={`/singleproduct/${e._id}`} className="btn btn-outline-primary">ADD TO CART</NavLink>
        </div>

                })
            }
        </div>
        </div>
   
    )
}

export default Product