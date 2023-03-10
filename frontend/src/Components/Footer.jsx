import React, { useContext } from "react";
import { ColorContext } from "../Context/ColorContext";
import Styles from "../Styles/Product.module.css"

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  const { bg } = useContext(ColorContext);
  return (
    <MDBFooter style={{ backgroundColor: bg }} className='text-center text-lg-start text-muted' id={Styles.footer} >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span  style={{ color:"white" , textDecoration:"none"}}>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/priya.phulmante' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon="facebook" /> 
          </a>
          <a href='https://twitter.com/priyankaphulma1' className='me-4 text-reset'>
            <MDBIcon  color='light' fab icon='twitter' />
          </a>
          <a href='https://github.com/priyankaphulmante98' className='me-4 text-reset'>
            <MDBIcon  color='light' fab icon='google' />
          </a>
          <a href='https://priyankaphulmante98.github.io' className='me-4 text-reset'>
            <MDBIcon  color='light' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/in/priyanka-phulmante-181633191' className='me-4 text-reset'>
            <MDBIcon  color='light' fab icon='linkedin' />
          </a>
          <a href='https://github.com/priyankaphulmante98' className='me-4 text-reset'>
            <MDBIcon  color='light' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6  style={{ color:"white" }} className='text-uppercase fw-bold mb-4'>
                <MDBIcon  style={{ color:"white"  }} icon='gem' className='me-3' />
                Cogito
              </h6>
              <p  style={{ color:"white" }}>
              Cogito is an Indian e-commerce company that sells cosmetics and personal care products. Cogito is dedicated to the clean beauty movement and all of their products are vegan, cruelty-free and PETA-approved. Products are made with a majority of natural ingredients.
              </p>
            </MDBCol>

            <MDBCol  md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6  style={{ color:"white" }} className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a  style={{ color:"white" , textDecoration:"none"}} href='/' >
                  Lipstick
                </a>
              </p>
              <p>
                <a style={{ color:"white" , textDecoration:"none"}} href='/'>
                  Mositure
                </a>
              </p>
              <p>
                <a  style={{ color:"white" , textDecoration:"none"}} href='/' >
                 Eyelinear
                </a>
              </p>
              <p>
                <a style={{ color:"white" , textDecoration:"none"}} href='/'>
                 Cream
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6  style={{ color:"white" }} className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' style={{ color:"white" , textDecoration:"none"}} >
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' style={{ color:"white" , textDecoration:"none"}}>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' style={{ color:"white" , textDecoration:"none"}}>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!'  style={{ color:"white" , textDecoration:"none"}}>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 style={{ color:"white" }} className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p  style={{ color:"white" , textDecoration:"none"}}>
                <MDBIcon  style={{ color:"white" , textDecoration:"none"}} icon='home' />
                &nbsp;&nbsp; Pune, Maharashtra
              </p>
              <p  style={{ color:"white" , textDecoration:"none"}}>
                <MDBIcon   icon='envelope'/>
                &nbsp;&nbsp; priyankaphulmante98@gmail.com
              </p>
              <p  style={{ color:"white" , textDecoration:"none"}}>
                <MDBIcon   icon='phone'  />&nbsp;&nbsp;  + 8208117277
              </p>
              <p  style={{ color:"white" , textDecoration:"none"}}>
                <MDBIcon  icon='print' />&nbsp;&nbsp; + 9421713063
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ color:"white" }}>
        © 2021 Copyright: Cogito Ergo Sum
      
      </div>
    </MDBFooter>
  );
}
