import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                {/* Update the logo src path */}
                <img
                    src={`${process.env.PUBLIC_URL}/logo.png`}  // Use process.env.PUBLIC_URL
                    alt="DIETY Logo"
                    className="logo-image"
                />
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
