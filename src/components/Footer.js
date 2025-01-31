import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Importing relevant icons
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Important Links Section */}
                <div className="footer-links">
                    <h4>Important Links</h4>
                    <div className="footer-links-columns">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/aboutus">About Us</a></li>
                        </ul>
                        <ul>
                            <li><a href="/ourteam">Our Team</a></li>
                            <li><a href="/joinus">Join Us</a></li>
                        </ul>
                        <ul>
                            <li><a href="/earlysignup">Early SignUp</a></li>
                            <li><a href="/faq">FAQ</a></li>
                        </ul>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="footer-contact">
                    <h4>Contact Information</h4>
                    <p>
                        <FaEnvelope className="contact-icon" />{" "}
                        <a href="mailto:diety.5d@gmail.com">Mail Us</a>
                    </p>
                    <p>
                        <FaPhoneAlt className="contact-icon" />{" "}
                        <a href="tel:+1234567890">Call Us</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 DIETY. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
