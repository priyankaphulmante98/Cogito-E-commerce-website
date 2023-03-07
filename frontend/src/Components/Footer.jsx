import React, { useContext } from "react";
import { ColorContext } from "../Context/ColorContext";
import styles from "../Styles/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  const { bg } = useContext(ColorContext);

  return (
    <>
    <div className={styles.footer} style={{ backgroundColor: bg }}>
     <div style={{display:"flex", justifyContent:"space-around", padding:"50px" , width:"100%"}}>

      <div className="col-1" style={{ width:"300px", textAlign:"center"}}>
        <h5 style={{marginBottom:"40px"}}>USEFUL LINKS</h5>
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">About</Link></p>
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Home</Link></p>
       
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Setvices</Link></p>
       
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Contact</Link></p>
       
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Blog</Link></p>

     
       
      </div>

      <div className="col-1" style={{ width:"300px", textAlign:"center"}}>
        <h5 style={{marginBottom:"40px"}}>USEFUL LINKS</h5>
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">About</Link></p>
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Home</Link></p>
       
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Setvices</Link></p>
       
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Contact</Link></p>
       
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Blog</Link></p>

      
       
      </div>

      <div className="col-1" style={{ width:"300px", textAlign:"center"}}>
        <h5 style={{marginBottom:"40px"}}>USEFUL LINKS</h5>
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">About</Link></p>
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Home</Link></p>
       
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Setvices</Link></p>
       
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Contact</Link></p>
       
       <p > <Link  style={{textDecoration:"none", color:"white", listStyle:"none"}} to="#">Blog</Link></p>

    
       
      </div>
      

      
      </div>
    
</div>
      </>
    
  );
}

export default Footer;
