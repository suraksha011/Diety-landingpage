import React, { useState } from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
    const [isBeating, setIsBeating] = useState(false);

    const handleLogoClick = () => {
        setIsBeating(true);

        // Start the beat animation for 21 times
        setTimeout(() => {
            setIsBeating(false); // Stop the beat effect after 21 seconds
        }, 21000); // The beat lasts for 21 seconds (21 beats, 1 second per beat)
    };

    return (
        <section id="contact" className="contact">
            <h3>Contact Us</h3>

            {/* Plant emoji inserted here with click-to-beat effect */}
            <div
                className={`emoji-container ${isBeating ? "beat tilt" : "tilt"}`}
                onClick={handleLogoClick}
            >
                🍀
            </div>

            {/* Contact Links with tilt effect on hover */}
            <div className="contact-box-container">
                <a
                    href="https://www.linkedin.com/company/dietyin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-box"
                >
                    <FaLinkedin className="contact-icon tilt" />
                      LinkedIn Page
                </a>
                <a
                    href="mailto:diety.5d@gmail.com"
                    className="contact-box"
                >
                    <FaEnvelope className="contact-icon tilt" />
                      Email Us
                </a>
            </div>

            {/* Join Us Note */}
            <div className="join-us-note">
                <p>
                    We're passionate about creating something meaningful and growing along the way. Join us, and let's thrive together!
                </p>
            </div>
        </section>
    );
};

export default Contact;
