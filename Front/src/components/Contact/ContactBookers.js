/**
 * NPM import
 */
import React from 'react';
import Proptypes from 'prop-types';
/**
 * Local import
 */

// Styles

/**
 * Code
 */
const ContactBookers = ({ contactType, contactTitle, contactName, contactTel, contactMail }) => (
     <div id="Contact-BookingDiv">
        <div id="booking">
            <h2 id="Contact-BookingType">{contactType}</h2>
            <div>
                <p>{contactTitle}</p>
                <p>{contactName}</p>
                <p>{contactTel}</p>
                <a href={`mailto:${contactMail}`}>{contactMail}</a>
            </div>
        </div>
    </div>
);

ContactBookers.propTypes = {
    contactType: Proptypes.string.isRequired,
    contactTitle: Proptypes.string.isRequired,
    contactName: Proptypes.string.isRequired,
    contactTel: Proptypes.string.isRequired,
    contactMail: Proptypes.string.isRequired,
  };

/**
 * Export
 */
export default ContactBookers;