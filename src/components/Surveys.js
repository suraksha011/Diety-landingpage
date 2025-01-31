import React from "react";
import "./Surveys.css";

const Surveys = () => {
    return (
        <div className="surveys-container">
            <div className="survey-header">
                Your views and answers will help a lot to develop our product.
            </div>
            <div className="survey-grid">
                <a
                    href="https://docs.google.com/forms/d/1O4efYSPQ_gqmcNMc2WtAyusEriFf7P9a_4SwPUOdsZw/edit#settings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="survey-box"
                >
                    Form 1
                </a>
                <a
                    href="https://docs.google.com/forms/d/1zGPU2TcINzPceniVWfn8sKwJTXDXUCl0He5QeaGj5r8/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="survey-box"
                >
                    Form 2
                </a>
                <a
                    href="https://docs.google.com/forms/d/1z4bkiJW7yRedFTZfZYySjnmfGdfNY7gFPBBYaPi93Qs/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="survey-box"
                >
                    Form 3
                </a>
                <a
                    href="https://docs.google.com/forms/d/1xhsHrQnIzBSB7sw7dIHwYflo_z01sHQLkSyaWrNTmDQ/edit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="survey-box"
                >
                    Form 4
                </a>
            </div>
        </div>
    );
};

export default Surveys;
