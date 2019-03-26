/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */

// Styles
import './contactbooking.scss';

/**
 * Code
 */
const ContactBooking = () => (
  <div id="ContactBooking">
    <h3 id="title-booking">Ou ici :</h3>
    <div id="bookingmanagement">
        <div id="booking">
            <h2 id="title-booking">Booking</h2>
            <div>
                <p>Booker 1</p>
                <p>06.XX.XX.XX.XX</p>
                <p>email@example.com</p>
            </div>
            <div>
                <p>Booker 2</p>
                <p>06.XX.XX.XX.XX</p>
                <p>email@example.com</p>
            </div>
        </div>
        <div id="management">
            <h2 id="title-management">Management</h2>
            <div>
                <p>Manager</p>
                <p>06.XX.XX.XX</p>
                <p>email@example.com</p>
            </div>
        </div>
    </div>
  </div>
);

/**
 * Export
 */
export default ContactBooking;