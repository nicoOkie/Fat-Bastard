/**
 * NPM Import
 */
import React from 'react';
import Proptypes from 'prop-types';


/**
 * Local Import
 */


/**
 * Code
 */

const Date = ({ date, city, venue }) => (
  <div className="tour-date">
    <div className="tour-date-item">{date}</div>
    <div className="tour-date-item">{city}</div>
    <div className="tour-date-item">{venue}</div>
  </div>
);

Date.propTypes = {
  date: Proptypes.string.isRequired,
  city: Proptypes.string.isRequired,
  venue: Proptypes.string.isRequired,
};

/**
 * Export
 */

export default Date;
