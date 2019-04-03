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
const ContactBookers = ({
  contactType,
  contactTitle,
  contactName,
  contactTel,
  contactMail,
}) => (
  <div className="contact-bookingDiv">
    <div className="contact-globalbooking">
      <h2 className="contact-bookingType">{contactType}</h2>
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
