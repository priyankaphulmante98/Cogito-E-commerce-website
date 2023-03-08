import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SingleProduct() {
  const params = useParams();
  const [product, setProduct] = useState({});

  function GetSingleprod() {
    axios.get(`http://localhost:8080/product/${params.id}`).then((res) => {
      setProduct(res.data);
      // console.log(res.data, "singleprod");

    });
  }

  useEffect(() => {
    GetSingleprod();
  }, []);

  function AddtoCart(productid) {
    let user = JSON.parse(localStorage.getItem("token")) || null;
    
    if (user.userId) {
      // console.log(user)
      axios
        .post(`http://localhost:8080/cart/${user.userId}`, {
          productId: productid,
        })
        .then((res) => alert("kel add")).catch(err=>alert("might already exists"))
    } else {
      alert("please login");
    }
  }

  return (
    <>
      <div
        className="container my-5 py-3"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          borderRadius: "20px",
        }}
      >
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoA_sVWUwvlckcQIfPUCdWC43-FYv3JXiBPxsOiCP6trtu0wbrPZx_roxdX_kDRnbT88I&usqp=CAU"
              }
              alt={"chitrt"}
              height="300px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h3 className="display-7 fw-bold">{product?.title}</h3>
            <hr />
            <h5 className="my-4">PRICE : ${product?.price}</h5>
            <h6 className="my-4">CATEGORY : {product.category} </h6>
            <p className="lead">
              DESCRPTION : 
              {product.desc}
            </p>
           
            <button
              onClick={() => AddtoCart(product._id)}
              className="btn btn-outline-primary  my-5"
            >
            
              ADD To CART
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct
