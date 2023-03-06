import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { AuthContextProvider } from "./Context/AuthContext";
import { ColorContextProvider } from "./Context/ColorContext";
// import "font-awesome/css/font-awesome.min.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ColorContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorContextProvider>
  </AuthContextProvider>
);
