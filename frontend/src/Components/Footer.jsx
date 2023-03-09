import React, { useContext } from "react";
import { ColorContext } from "../Context/ColorContext";

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  const { bg } = useContext(ColorContext);
  return (
    <MDBFooter style={{ backgroundColor: bg }} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span  style={{ color:"white" , textDecoration:"none"}}>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon="facebook" /> 
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon  color='light' fab icon='twitter' />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon  color='light' fab icon='google' />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon  color='light' fab icon='instagram' />
          </a>
          <a href='/' className='me-4 text-reset'>
            <MDBIcon  color='light' fab icon='linkedin' />
          </a>
          <a href='/' className='me-4 text-reset'>
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
                FUNDFLO
              </h6>
              <p  style={{ color:"white" }}>
              Fundflo Technologies is a fintech startup that is aiming to transform the working capital cycle of businesses by digitizing the B2B supply chain ecosystem
              </p>
            </MDBCol>

            <MDBCol  md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6  style={{ color:"white" }} className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a  style={{ color:"white" , textDecoration:"none"}} href='#!' >
                  javascript
                </a>
              </p>
              <p>
                <a style={{ color:"white" , textDecoration:"none"}} href='#!'>
                  React
                </a>
              </p>
              <p>
                <a  style={{ color:"white" , textDecoration:"none"}} href='#!' >
                 Node..js
                </a>
              </p>
              <p>
                <a style={{ color:"white" , textDecoration:"none"}} href='#!'>
                 MongoDB
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
                &nbsp;&nbsp; priyankaphulmante98@example.com
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
