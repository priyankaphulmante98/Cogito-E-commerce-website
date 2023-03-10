import React, { useEffect, useState } from "react";
import  axios from "axios";

function Modal({e,getData}) {



  const [data,setData]=useState({
    image: "",
    title: "",
    desc: "",
    price: "",
    category: ""
  })

  function handleChage(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleUpdate() {
    try {
      
 
    } catch (err) {
      console.log(err);
    }
  }


  

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-primary ms -auto"
        data-bs-toggle="modal"
        data-bs-target="#loginModal"
      >
        <span className="fa fa-sign-in me-1"></span> UPDATE
      </button>

      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                UPDATE PRODUCT
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <div className="mb-3">
                    <input
                      type="url"
                      className="form-control"
                      id="image"
                      name="image"
                      placeholder="image"
                      value={data.image}
                      onChange={(e)=>handleChage(e)}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      placeholder="title"
                      value={data.title}
                      onChange={()=>handleChage()}
                    />
                  </div>

                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    name="desc"
                    placeholder="desc"
                    value={data.desc}
                      onChange={(e)=>handleChage(e)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="price"
                    value={data.price}
                      onChange={(e)=>handleChage(e)}
                  />
                </div>

                <div className="mb-3">
                  <select name="category" className="form-control" value={data.category}
                      onChange={(e)=>handleChage(e)}>
                    <option value="">Category</option>
                    <option value="lipstick">Lipstik</option>
                    <option value="eyelinear">Eyelinear</option>
                    <option value="cream">Cream</option>
                    <option value="mositure">Mositure</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleUpdate()}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
