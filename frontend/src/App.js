import { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import AdminPage from './Pages/AdminPage';
import AllRouter from "./Routes/AllRouter";




function App() {
  const [role,setRole]=useState("")
  return (
    <div className="App">
      { role !== "admin"?<Navbar/>:<>
<Navbar/>
     <AdminPage/> </> }
      <AllRouter />
   
 
   
    </div>
  );
}

export default App;
