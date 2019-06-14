import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigationWrapper">
      <div className="left-side">
        <div className="logo">
          <div className="artistname">Janis Joplin</div>
        </div>
      </div>
      <div className="right-side">
        <Link to="/" className="linkWrapper">
          <div className="link">Home</div>
        </Link>
        <Link to="/about" className="linkWrapper">
          <div className="link">About</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
