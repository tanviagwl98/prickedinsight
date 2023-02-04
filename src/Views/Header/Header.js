import React from "react";
import Logo from "../../Assets/logo.gif";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <img src={Logo} className="logo" />
      <div className="nav-items">
        <ul className="item-list">
          <Link to="/" className="items">
            <li className="item">Home</li>
          </Link>
          <Link to="/blogs" className="items">
            <li className="item" >Blogs</li>
          </Link>
          <Link to="/" className="items">
            {" "}
            <li className="item">About</li>
          </Link>
          <Link to="/testimonials" className="items">
            <li className="item">Testimonials</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
