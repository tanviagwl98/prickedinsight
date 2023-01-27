import React from 'react';
import Logo from "../../Assets/logo.gif";
import './Header.css';

export const Header = () => {
    return ( 
        <div className="header">
        <img src={Logo} className="logo" />
        <div className = "nav-items">
            <ul className="item-list">
            <li className="item">
                Home
            </li>
            <li className="item">
                Blogs
            </li>
            <li className="item">
                About
            </li>
            <li className="item">
                Testimonials
            </li>
            </ul>
        </div>
        </div>
    )
}