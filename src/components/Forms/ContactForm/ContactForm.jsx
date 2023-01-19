import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {
  return (
    <>
      <div className='container'>
        <div className='line' />
        <h3 className='contact-form-title'>Get in Touch</h3>
        <div className='contact__form'>
          <form
            action='mailto:azizbek020@icloud.com'
            autoComplete='on'
            method='post'
            id='contact-form'
          >
            <input type='text' placeholder='Your Name*' name='Name' required />
            <input
              type='email'
              placeholder='Email Address*'
              name='Email'
              required
            />
            <input
              type='number'
              placeholder='WhatsApp Number*'
              name='Whatsapp Number'
              required
            />
            <textarea
              placeholder='Message*'
              name='User feedback message'
              required
            />
            <button type='submit' className='form_send-btn mt-5'>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
