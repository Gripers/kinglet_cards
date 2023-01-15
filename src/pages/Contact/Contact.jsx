import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Forms/ContactForm/Form";
import {Icon} from '@iconify/react';
import "./Contact.scss"

const Contact = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <h1 className="contact-title">Contact Us</h1>
                <div className="contacts">
                    <div className="address">
                        <div className="address-top">
                            <Icon icon="ic:round-location-on" color="white"/><h3> Address</h3>
                        </div>
                        <p>6210 Watford Dr League City, TX 77573</p>
                    </div>
                    <div className="address">
                        <div className="address-top">
                            <Icon icon="mdi:email" color="white"/><h3> Email</h3>
                        </div>
                        <a href="mailto: kingletcards@gmail.com" className="email-link">kingletcards@gmail.com</a>
                    </div>
                </div>
            </div>
            <Form/>
            <Footer/>
        </>
    );
};

export default Contact;