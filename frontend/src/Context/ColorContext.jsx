import { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [bg, setBg] = useState("teal");
  

  function ChangeColor(){
    let color = ["rubyred","jamred","darkgray", "black", "purple","lightgreen", "orange", "green"]
    let num =  Math.floor(Math.random() * color.length) 
    setBg(color[num])
  }
  return (
    <ColorContext.Provider value={{ bg, ChangeColor}}>
      {children}
    </ColorContext.Provider>
  );
};
