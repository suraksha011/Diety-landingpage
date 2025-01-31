import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./JoinAsContributor.css";

const JoinAsContributor = () => {
    return (
        <section className="join-contributor-container">
            <div className="content-box">
                <h2>Join Us as a Contributor</h2>
                <p>We’re always looking for passionate individuals to collaborate with us.  
                   If you're interested, feel free to reach out through email or LinkedIn.</p>

                {/* Contact Buttons */}
                <div className="contact-buttons">
                    <a href="mailto:diety.5d@gmail.com" className="contact-btn">
                        <FaEnvelope className="icon" /> Email Us
                    </a>
                    <a
                        href="https://www.linkedin.com/company/dietyin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn"
                    >
                        <FaLinkedin className="icon" /> LinkedIn Page
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JoinAsContributor;
