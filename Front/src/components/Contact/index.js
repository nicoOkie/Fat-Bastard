/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import ContactForm from 'src/components/ContactForm';
import ContactBooking from 'src/components/ContactBooking';
// Styles
import './contact.scss';

/**
 * Code
 */
const Contact = () => (
  <div id="Contact">
    <ContactForm />
    <ContactBooking />
  </div>
);

/**
 * Export
 */
export default Contact;