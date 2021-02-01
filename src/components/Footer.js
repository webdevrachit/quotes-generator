import React from "react";

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="navbar-text">
                <div className="text__details">
                    Made with{" "}
                    <span>
                        <i className="fas fa-heart"></i>
                    </span>{" "}
                    and{" "}
                    <span>
                        <i className="fas fa-mug-hot"></i>
                    </span>
                    by{" "}
                </div>
                <a
                    href="github.com/webdevrachit"
                    target="_blank"
                    rel="noreferrer"
                >
                    Rachit Tandon
                </a>
            </div>
        </div>
    );
};

export default Footer;
