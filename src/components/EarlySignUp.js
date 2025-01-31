import React, { useState } from "react";
import "./EarlySignUp.css";

const SignupForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setFormData({ name: "", email: "" });
    };

    const handleClose = () => {
        setIsSubmitted(false);
    };

    return (
        <section className="signup-section">
            <div className="signup-container">
                <h3 className="signup-heading">EARLY SIGN UP</h3>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="signup-btn">
                        SIGN UP
                    </button>
                </form>
            </div>

            {isSubmitted && (
                <div className="modal">
                    <div className="modal-content">
                        <h4>Thank you for signing up, {formData.name}!</h4>
                        <p>We will keep you updated with the latest news.</p>
                        <button className="close-btn" onClick={handleClose}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SignupForm;
