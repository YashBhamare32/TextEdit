import React, { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButton from "./Toggle";

export function Navbar() {
  const [dark , setDark] = useState(false);
  function handleDark(){
    setDark(!dark);
  }
  return (
    <div className="p-4 flex  justify-between">
      <div className=" flex items-center">
        <Link to="/" className="font-bold text-5xl text-indigo-400 mr-2">TextEdit</Link>
        <Link to="/" className="font-bold text-xl mx-2">Home</Link>
        <Link to="/about" className="font-bold text-xl mx-2">About</Link>
      </div>
      {/* <div className=" flex items-center bg-indigo-300 p-2 rounded-md">
        <ToggleButton />
        {/* <span onClick={handleDark}>Dark mode:  </span> }
      </div> */}
    </div>
  );
}
