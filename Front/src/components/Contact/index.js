/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import ContactForm from './ContactForm';
import ContactBooking from './ContactBooking';
// Styles
import './contact.scss';

/**
 * Code
 */
const Contact = () => (
  <div className="contact">
    <ContactForm />
    <ContactBooking />
  </div>
);

/**
 * Export
 */
export default Contact;
