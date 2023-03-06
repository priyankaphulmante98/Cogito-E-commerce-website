import React, { useState,  useEffect } from 'react'
import axios from "axios"

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


    return (

  <div>

<div id="filterSort">
 <select id="filter" placeholder="filterBy" >
  <option value="">Filter by Category</option>
  <option value="furniture">Furniture</option>
  <option value="clothes">Clothes</option>
  <option value="electronics">Electronics</option>
  <option value="otros">Otros</option>
  <option value="shoes">Shoes</option>
 </select>

 <select id="sort" placeholder="orderOfSort">
<option value="">Sort</option>
<option value="asc">ASCENDING</option>
<option value="desc">DESCNDING</option>
 </select>

 <select placeholder="limit">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
</select>

 



  </div>
     
        <div id="container">
            {
                data.map((e,i)=> {
                  return  <div id="box" key={i}>
                <img src={e.image} alt="chi"/>
                <h4>{e.price}</h4>
                <h3>{e.category}</h3>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
                <button>BUY</button>
        </div>

                })
            }
        </div>
        </div>
   
    )
}

export default Product