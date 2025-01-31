import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
    return (
        <nav className="navbar">
            {/* First row of navigation links */}
            <ul className="navbar-row">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/aboutus" className={({ isActive }) => (isActive ? "active" : "")}>
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ourteam" className={({ isActive }) => (isActive ? "active" : "")}>
                        Our Team
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/objective" className={({ isActive }) => (isActive ? "active" : "")}>
                        Objective
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/surveys" className={({ isActive }) => (isActive ? "active" : "")}>
                        Surveys
                    </NavLink>
                </li>
            {/* </ul>
            {/* Second row of navigation links */}
            {/* <ul className="navbar-row"> */} }*/
                <li>
                    <NavLink to="/joinus" className={({ isActive }) => (isActive ? "active" : "")}>
                        Join Us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/earlysignup" className={({ isActive }) => (isActive ? "active" : "")}>
                        Early Sign-Up
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/faq" className={({ isActive }) => (isActive ? "active" : "")}>
                        FAQ
                    </NavLink>
                </li>
            </ul>
            {/* Added button */}
            {/* <div className="navbar-button-container">
                <button className="cta-button" onClick={() => alert("Button clicked!")}>
                    Call to Action
                </button>
            </div> */}
        </nav>
    );
};

export default NavBar;
