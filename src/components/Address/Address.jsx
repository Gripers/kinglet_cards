import React from 'react';
import { Icon } from '@iconify/react';
import './Address.scss';

const Address = () => {
  return (
    <>
      <div className='container'>
        <h1 className='contact-title'>Contact Us</h1>
        <div className='contacts'>
          <div className='address'>
            <div className='address-top'>
              <Icon icon='ic:round-location-on' color='white' />
              <h3> Address</h3>
            </div>
            <p>6210 Watford Dr League City, TX 77573</p>
          </div>
          <div className='address'>
            <div className='address-top'>
              <Icon icon='mdi:email' color='white' />
              <h3> Email</h3>
            </div>
            <a href='mailto: kingletcards@gmail.com' className='email-link'>
              kingletcards@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
