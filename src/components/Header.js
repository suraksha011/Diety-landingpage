import React from "react";
import Navbar from "./Navbar"; // Import Navbar for placing beside the logo
import "./Header.css";

const Header = () => {
    return (
        <header className="header-container">
            <img
                    src={`${process.env.PUBLIC_URL}/logo_new.png`}  // Use process.env.PUBLIC_URL
                    alt="DIETY Logo"
                    className="logo-image"
                />
            <Navbar /> {/* Place the Navbar beside the logo */}
        </header>
    );
};

export default Header;
