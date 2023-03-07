import React from 'react'
import { useState } from 'react';

function SingleProduct() {
  ;
    return (
        <>
        <div className="container my-5 py-3" style={{boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" , borderRadius:"20px"}}>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
              <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoA_sVWUwvlckcQIfPUCdWC43-FYv3JXiBPxsOiCP6trtu0wbrPZx_roxdX_kDRnbT88I&usqp=CAU"} alt={"chitrt"} height="300px" />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3 className="display-7 fw-bold">LORIO CREAM</h3>
              <hr />
              <h5 className="my-4">PRICE : $5675</h5>
              <h6 className="my-4">CATEGORY : MAKEUP </h6>
              <p className="lead">DESCRPTION : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quibusdam, adipisci saepe atque dolorem necessitatibus accusantium nihil nam iusto qui facilis dolor fugiat perferendis, earum ut odio iste iure incidunt.</p>
              <div>
              <button className="my-4" style={{padding:"15px", marginRight:"20px"}}>+</button>
              { 1}
              <button className="my-4" style={{padding:"15px", marginLeft:"20px"}}>-</button>
              </div>
              <button
              
                className="btn btn-outline-primary  my-5"
              > PLACE ORDER
          
              </button>
            </div>
          </div>
        </div>
      </>
    )
}

export default SingleProduct
