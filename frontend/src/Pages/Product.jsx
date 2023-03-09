import React, { useState,  useEffect } from 'react'
import axios from "axios"
import Styles from '../Styles/Product.module.css'
import { NavLink } from 'react-router-dom';


function Product() {
  
   const [data, setData] = useState([]);
   const [fdata, setfData] = useState([]);
   const [sortBy, setSortBy] =useState("asc");
   
    async function getData(){
      let res = await axios.get(`http://localhost:8080/product`);
      console.log(res.data);
       setData(res.data);
       setfData(res.data)
    }

    function AddtoCart(productId){
      const {userId}=JSON.parse(localStorage.getItem("token"))
      axios.post(`http://localhost:8080/cart/${userId}`,{productId}) 

    }

    function handleFilter(e){
    let value = e.target.value;
    let filterArr = data.filter((e) => e.category ==value)
    setfData(filterArr)
    }
    useEffect(() => {
      getData()
   },[])

   useEffect(() => {
    if(sortBy == "dsc"){
      setfData(data.sort((a,b) => a.price - b.price));

    }else{

      setfData(data.sort((a,b) => b.price-a.price));
    }
   }, [sortBy]);


    return (
      <div>
        <div
          id="filterSort"
          style={{
            display: "flex",
            justifyContent: "space-around",
            columnGap: "30px",
            width: "100%",
          }}
        >
          <select
            style={{ marginTop: "20px",width: "300px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
            id="filter" placeholder="filterBy"  name="category" onChange={(e) => handleFilter(e)}
          >
         <option value="">Category</option>
        <option value="lipstick">Lipstik</option>
        <option value="eyelinear">Eyelinear</option>
        <option value="cream">Cream</option>
        <option value="mositure">Mositure</option>
      </select>

          <select id="sort" placeholder="Sort By Price" onChange={((e) => setSortBy(e.target.value))} 
           style={{
              marginTop: "20px",
              width: "300px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}>
            <option value="">Sort By Price</option>
            <option value="asc">ASCENDING</option>
            <option value="dsc">DESCNDING</option>
          </select>
        </div>

        <div id={Styles.container}>
          {fdata.map((e, i) => {
            return (
              <div id={Styles.box} key={i}>
                <img src={e.image} alt="chi" />
                <h3>{e.title}</h3>
                <h6>{e.category}</h6>
                <p>{e.desc}</p>
                <h5>{e.price}</h5>
                <NavLink
                  to={`/cart`}
                  className="btn btn-outline-primary"
                  onClick={()=>AddtoCart(e._id)}
                >
                  ADD TO CART
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Product