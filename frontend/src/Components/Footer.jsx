import React, { useContext } from 'react'
import { ColorContext } from '../Context/ColorContext'
import styles from '../Styles/Footer.module.css'

function Footer() {

  const {bg} = useContext(ColorContext)

  return (
    <div className={styles.footer} style={{backgroundColor:bg}} >

 
    </div>
  )
}

export default Footer

// import React, { useState } from 'react';

// function App() {
//   const [navbarColor, setNavbarColor] = useState(getRandomColor());
//   const [footerColor, setFooterColor] = useState(getRandomColor());

//   function getRandomColor() {
//     const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
//     return colors[Math.floor(Math.random() * colors.length)];
//   }

//   function handleNavbarClick() {
//     setNavbarColor(getRandomColor());
//   }

//   function handleFooterClick() {
//     setFooterColor(getRandomColor());
//   }

//   return (
//     <div>
//       <nav style={{ backgroundColor: navbarColor }} onClick={handleNavbarClick}>
//         <h1>Navbar</h1>
//       </nav>
//       <footer style={{ backgroundColor: footerColor }} onClick={handleFooterClick}>
//         <p>Footer</p>
//       </footer>
//     </div>
//   );
// }

// export default App;