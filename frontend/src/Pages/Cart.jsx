import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
      <div>total ammount :{total || 0}</div>
      {carts?.map((e) => {
        return (
          <div style={{ display: "flex", gap: "2rem" }}>
            <div>
              <img src={e.productId.image} alt={e.productId.title} />
            </div>
            <div>
              <h3>{e.productId.title}</h3>
              <p>{e.productId.category}</p>
              <p>{e.productId.price}</p>
              <div>
                <button onClick={() => changeQuanity(e._id, e.quantity + 1)}>
                  +
                </button>
                <span>{e.quantity}</span>
                <button
                  disabled={e.quantity <= 1}
                  onClick={() => changeQuanity(e._id, e.quantity - 1)}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    removefromcart(e._id);
                  }}
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
