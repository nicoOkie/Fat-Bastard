/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import ContactBookers from './ContactBookers';
import bookingData from 'src/booking';
// Styles

/**
 * Code
 */
const ContactBooking = () => (
    <div id="Contact-Booking">
        <h3 id="Contact-BookingTitle">Ou ici :</h3>
        {bookingData.map(booking => (
      <ContactBookers key={booking.contactType} {...booking} />
    ))}
    </div>
);

/**
 * Export
 */
export default ContactBooking;