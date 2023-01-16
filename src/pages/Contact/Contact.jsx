import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/Forms/ContactForm/ContactForm";
import Address from "../../components/Address/Address";

const Contact = () => {
    return (
        <>
            <Navbar/>
            <Address />
            <ContactForm/>
            <Footer/>
        </>
    );
};

export default Contact;