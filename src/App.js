import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Header from "./components/Header"; // Import the new Header component
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import OurTeam from "./components/OurTeam";
import Objective from "./components/Objective";
import Surveys from "./components/Surveys";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import EarlySignUp from "./components/EarlySignUp";
import Footer from "./components/Footer";
import AsContributor from "./components/JoinAsContributor";
import AsInvestor from "./components/JoinAsInvestor";

import "./index.css";

const App = () => {
    return (
        <Router>
            <div className="App">
                {/* Header */}
                <Header />
                {/* Navbar */}
                {/* <Navbar /> */}

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/ourteam" element={<OurTeam />} />
                    <Route path="/objective" element={<Objective />} />
                    <Route path="/surveys" element={<Surveys />} />
                    <Route path="/joinus" element={<JoinUs />} />
                    <Route path="/earlysignup" element={<EarlySignUp />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/ascontributor" element={<AsContributor />} />
                    <Route path="/asinvestor" element={<AsInvestor/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
