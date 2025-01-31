import React from "react";
import Navbar from "./Navbar"; // Import Navbar for placing beside the logo
import "./Header.css";

const Header = () => {
    return (
        <header className="header-container">
            <img
                src={"/Logo_new.png"}
                alt="DIETY Logo"
                className="logo"
            />
            <Navbar /> {/* Place the Navbar beside the logo */}
        </header>
    );
};

export default Header;
