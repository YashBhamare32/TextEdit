import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="p-4 flex items-center">
      <Link to="/" className="font-bold text-5xl text-indigo-400 mr-2">TextEdit</Link>
      <Link to="/home" className="font-bold text-xl mx-2">Home</Link>
      <Link to="/about" className="font-bold text-xl mx-2">About</Link>
    </div>
  );
}
