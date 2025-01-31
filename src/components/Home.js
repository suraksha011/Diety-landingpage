import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const banners = [
        "/Banner1.png",
        "/Banner2.jpg",
        "/Banner3.jpg",
        "/Banner4.png",
    ];

    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(() => {
        const bannerInterval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 5000); // Change banner every 3 seconds

        return () => clearInterval(bannerInterval); // Clean up on unmount
    }, [banners.length]);

    return (
        <div className="home-container">
            <div className="banner-container">
                <img
                    src={banners[currentBanner]}
                    alt="Banner"
                    className="banner-image"
                />
            </div>
            <div className="box box-left">
                <h2>Welcome to DIETY</h2>
                <p>Your personalized diet assistant</p>
                <Link to="/aboutus">
                    <button className="learn-more-btn">Learn More</button>
                </Link>
            </div>
            <div className="box box-right">
                <h2>Get Started</h2>
                <p>Join us today and start managing your diet</p>
                <Link to="/earlysignup">
                    <button className="sign-up-btn">Early Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
