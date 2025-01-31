import React, { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./JoinAsInvestor.css";

const JoinAsInvestor = () => {
    const [isLetterOpen, setIsLetterOpen] = useState(false);

    const handleEnvelopeClick = () => {
        setIsLetterOpen(true);
    };

    return (
        <section className="join-as-investor-container">
            {/* Envelope Section */}
            <div
                className={`envelope-wrapper ${isLetterOpen ? "open" : ""}`}
                onClick={handleEnvelopeClick}
            >
                <div className="envelope">
                    <div className="envelope-flap"></div>
                    <div className="envelope-body"></div>
                    <div className="letter-preview">
                        <h2>A Letter to Our Future Investor</h2>
                    </div>
                </div>
            </div>

            {/* Letter Content Section */}
            {isLetterOpen && (
                <div className="letter-content">
                    <div className="letter">
                        <p>Dear Investor, we would love to share our pitch deck with you. Kindly connect with us through out LinkedIn Page or Mail. </p>
                        <p>
                            {/* Content will be added here later */}
                        </p>
                    </div>

                    {/* Contact Buttons */}
                    <div className="contact-buttons">
                        <a href="mailto:diety.5d@gmail.com" className="contact-btn">
                            <FaEnvelope className="icon" /> Mail
                        </a>
                        <a
                            href="https://www.linkedin.com/company/dietyin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn"
                        >
                            <FaLinkedin className="icon" /> LinkedIn
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
};

export default JoinAsInvestor;
