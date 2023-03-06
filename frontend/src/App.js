import { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";

import Navbar from "./Components/Navbar";
import AdminPage from "./Pages/AdminPage";
import AllRouter from "./Routes/AllRouter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRouter />
      <Footer />
    </div>
  );
}

export default App;
