import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq">
            <h3>FAQ</h3>
            <ul>
                <li>
                    <div 
                        className="question" 
                        onClick={() => toggleAnswer(0)}
                    >
                        <strong>What is DIETY?</strong>
                    </div>
                    <div className={`answer ${openIndex === 0 ? 'open' : ''}`}>
                        DIETY is a platform for dietary management. We are currently working on it.
                    </div>
                </li>
                <li>
                    <div 
                        className="question" 
                        onClick={() => toggleAnswer(1)}
                    >
                        <strong>What is our mission?</strong>
                    </div>
                    <div className={`answer ${openIndex === 1 ? 'open' : ''}`}>
                        To revolutionize dietary inclusivity.
                    </div>
                </li>
                <li>
                    <div 
                        className="question" 
                        onClick={() => toggleAnswer(2)}
                    >
                        <strong>Is it a website or an app?</strong>
                    </div>
                    <div className={`answer ${openIndex === 2 ? 'open' : ''}`}>
                        Both! We are working to create a better environment setup.
                    </div>
                </li>
                <li>
                    <div 
                        className="question" 
                        onClick={() => toggleAnswer(3)}
                    >
                        <strong>How to use?</strong>
                    </div>
                    <div className={`answer ${openIndex === 3 ? 'open' : ''}`}>
                        Simply sign up and start exploring.
                    </div>
                </li>
                <li>
                    <div 
                        className="question" 
                        onClick={() => toggleAnswer(4)}
                    >
                        <strong>How can we connect?</strong>
                    </div>
                    <div className={`answer ${openIndex === 4 ? 'open' : ''}`}>
                        Reach out through our contact form.
                    </div>
                </li>
            </ul>
        </section>
    );
};

export default FAQ;
