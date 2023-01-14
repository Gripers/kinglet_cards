import React from 'react';
import "./Footer.scss"
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.jpg"

const Footer = () => {
    return (
        <div className="footer_div">
            <div className="container">
                <div className="footer_over">
                    <div className="footer_texts">
                        <div className="footer-address">
                            <h1>Get in Touch with KingletCards</h1>
                            <p>6210 Watford Dr League City, TX 77573</p>
                        </div>
                        <div className="footer-email">
                            <a href="mailto: kingletcards@gmail.com">kingletcards@gmail.com</a>
                        </div>
                        <div className="footer-navigate">
                            <h1>Explore</h1>
                            <div className="footer-links">
                                <Link to="/">Home</Link>
                                <Link to="/">Order</Link>
                                <Link to="/">Best Design</Link>
                            </div>
                        </div>
                    </div>
                    <img className="footer_logo" src={logo} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Footer;