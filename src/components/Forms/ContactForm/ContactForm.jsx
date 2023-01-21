import React, {useContext} from 'react';
import './ContactForm.scss';
import {Context} from "../../../context";

const ContactForm = () => {

  const {
    contactUs, nameCon, setNameCon, emailCon, setEmailCon, whatsappNum, setWhatsappNum,
    feedback, setFeedback
  } = useContext(Context)

  return (
      <>
        <div className='container'>
          <div className='line'/>
          <h3 className='contact-form-title'>Get in Touch</h3>
          <div className='contact__form'>
            <form action="" autoComplete='on' method="post" id='contact-form'>
              <input type='text' placeholder='Your Name*' name='Name' value={nameCon}
                     onChange={(e) => setNameCon(e.target.value)} required/>
              <input type='email' placeholder='Email Address*' name='Email' value={emailCon}
                     onChange={(e) => setEmailCon(e.target.value)} required/>
              <input type='number' placeholder='WhatsApp Number*' name='Whatsapp Number' value={whatsappNum}
                     onChange={(e) => setWhatsappNum(e.target.value)} required/>
              <textarea placeholder='Message*' name='User feedback message' value={feedback}
                        onChange={(e) => setFeedback(e.target.value)} required/>
              <button type='button' className='form_send-btn mt-5' onClick={contactUs}>Send</button>
            </form>
          </div>
        </div>
      </>
  );
};

export default ContactForm;
