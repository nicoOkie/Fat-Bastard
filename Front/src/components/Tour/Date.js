/**
 * NPM Import
 */
import React from 'react';
import Proptypes from 'prop-types';
import { MdStar, MdPinDrop } from 'react-icons/md';
import { FaTicketAlt } from 'react-icons/fa';


/**
 * Local Import
 */


/**
 * Code
 */

const Date = ({
  date,
  city,
  venue,
  tickets,
}) => {
  const splitDate = date.split('/');

  return (
    <div className="tour-date">
      <div className="tour-date-date">
        <p>
          {splitDate[0]}
          <MdStar className="tour-date-date-star" />
          {splitDate[1]}
        </p>
        <p className="tour-date-date-year">{splitDate[2]}</p>
      </div>
      <div className="tour-date-city">{city}</div>
      <div className="tour-date-venue">{venue}</div>
      <a href="" target="_blank" className="tour-date-map">
        <MdPinDrop />
      </a>
      <a href={tickets} className="tour-date-ticket">
        <FaTicketAlt />
      </a>
    </div>
  );
};

Date.propTypes = {
  date: Proptypes.string.isRequired,
  city: Proptypes.string.isRequired,
  venue: Proptypes.string.isRequired,
  tickets: Proptypes.string.isRequired,
};

/**
 * Export
 */

export default Date;
