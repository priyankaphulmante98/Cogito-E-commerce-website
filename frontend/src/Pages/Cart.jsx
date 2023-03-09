import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Styles from '../Styles/Cart.module.css'

function Cart() {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);

  function getrCarts() {
    axios.get(`http://localhost:8080/cart`).then((res) => {
      setCarts(res.data);
      let tot = res.data?.reduce(
        (acc, e) => acc + Number(e.productId.price)*Number(e.quantity),
        0
      );
      setTotal(tot);
    });
  }

  function changeQuanity(id, value) {
    axios
      .patch(`http://localhost:8080/cart/${id}`, { quantity: value })
      .then((res) => {
        console.log("jhal");
        getrCarts();
      });
  }

  function removefromcart(id) {
    axios.delete(`http://localhost:8080/cart/${id}`).then((res) => {
      alert("deleeted");
      getrCarts();
    });
  }

  useEffect(() => {
    getrCarts();
  }, []);
  return (
    <div>
      <div className={Styles.total}>TOTAL AMOUNT : &nbsp;{total || 0}</div>
      {carts?.map((e) => {
        return (
          <div  className={Styles.product}>
            <div className={Styles.Pro_img}>
              <img src={e.productId.image} alt={e.productId.title} />
            </div>
            <div className={Styles.cartProduct}>
              <h3>{e.productId.title}</h3>
              <p>{e.productId.category}</p>
              <h5>{e.productId.price}</h5>
              <div>
                <span onClick={() => changeQuanity(e._id, e.quantity + 1)}>
                <i style={{ fontSize:"40px" ,color:"green", marginRight:"10px"}} class="fa-solid fa-square-plus"></i>
                </span>
                <span style={{textAlign:"center"}}>{e.quantity}</span>
                <span
                  disabled={e.quantity <= 1}
                  onClick={() => changeQuanity(e._id, e.quantity - 1)}
                >
                  <i style={{ fontSize:"40px" ,color:"red", marginLeft:"10px"}} class="fa-solid fa-square-minus"></i>
                </span>
              </div>
              <div>
                <div
                  onClick={() => {
                    removefromcart(e._id);
                  }}
                >
                 <i style={{ fontSize:"30px" ,color:"blue", marginTop:"1px"}} class="fa-solid fa-trash"></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
