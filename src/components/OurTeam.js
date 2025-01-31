import React from "react";
import { FaPeopleCarry, FaRocket } from "react-icons/fa";
import "./OurTeam.css";

const OurTeam = () => {
    return (
        <div className="our-team-container">
            <h1>Us</h1>
            <p className="team-description">
                We are a group of college students, trying to empower our vision.
            </p>

            {/* Icons representing teamwork and vision */}
            <div className="team-icons">
                <div className="team-icon">
                    <FaPeopleCarry className="icon" />
                    <h3>Our Values</h3>
                    <p>
                        We believe in collaboration, innovation, and growth. Together, we create and achieve
                        extraordinary results.
                    </p>
                </div>
                <div className="team-icon">
                    <FaRocket className="icon" />
                    <h3>Our Vision</h3>
                    <p>
                        To create a community that is passionate about using AI to solve health-related problems
                        and improve lives.
                    </p>
                </div>
            </div>

            {/* Call to action */}
            <div className="join-us-container">
                <h2>Want to be a part.</h2>
                <p>
                    Interested in joining us? If you are passionate about health tech and want to make
                    an impact, we would love to hear from you! </p>
                    <p>Contact Us at our LinkedIn.
                </p>
                <a href="https://www.linkedin.com/company/diety-healthtech" target="_blank" rel="noopener noreferrer">
                    <button className="join-us-button">LinkedIn</button>
                </a>            </div>
        </div>
    );
};

export default OurTeam;
