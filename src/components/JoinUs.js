import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JoinUs.css";

const JoinUs = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        // Trigger the animation by setting the state
        setIsClicked(false); // Reset first to ensure animation restarts
        setTimeout(() => {
            setIsClicked(true); // Apply animation class after a brief delay
        }, 50); // Short delay to reset the animation
    };

    return (
        <div className="join-us-container">
            <div className="join-us-box">
                <h2>Join Us</h2>
                <p>
                    We would be honored to have you join us on our humble journey. Every contribution, whether it's a thought or feedback, is truly appreciated, and we will do our best to show our gratitude.
                </p>
                {/* Handshake emoji that triggers animation on click */}
                <span
                    className={`handshake ${isClicked ? 'beat' : ''}`}
                    onClick={handleClick}
                    role="img"
                    aria-label="handshake"
                >
                    🤝
                </span>
            </div>

            <div className="journey-title">
                <h3>Be a part of our journey as a...</h3>
            </div>

            <div className="role-container">
                <Link to="/AsContributor" className="role-box">
                    <h4>Contributor</h4>
                </Link>
                <Link to="/AsInvestor" className="role-box">
                    <h4>Investor</h4>
                </Link>
            </div>
        </div>
    );
};

export default JoinUs;
