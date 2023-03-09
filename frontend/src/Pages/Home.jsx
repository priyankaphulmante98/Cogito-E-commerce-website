import React, { useState,  useEffect } from 'react'
import axios from "axios"
import Product from './Product'
import Styles from "../Styles/Product.module.css"

function Home() {

  
    return (

        <>
        <section className="img-div">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators" >
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

        </div>
     
        <div className="carousel-inner" >
          <div className="carousel-item active">
            <img src="https://img.freepik.com/free-vector/summer-skin-care-cosmetics-tropic-vector_88138-287.jpg?size=626&ext=jpg&ga=GA1.2.237035305.1678188583&semt=ais" height="500px" className="d-block w-100" alt="ONE"/>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/night-cosmetic-series-face-skin-care_88138-12.jpg" height="500px" className="d-block w-100" alt="TWO"/>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/lipstick-cosmetics-banner_1419-2232.jpg?size=626&ext=jpg&ga=GA1.2.237035305.1678188583&semt=ais" height="500px" className="d-block w-100" alt="THREE"/>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/free-vector/night-cosmetic-line-face-skin-care_88138-13.jpg?size=626&ext=jpg&ga=GA1.2.237035305.1678188583&semt=ais" height="500px" className="d-block w-100" alt="THREE"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      </section>
      <Product />
        

        </>
      
   
    )
}

export default Home
