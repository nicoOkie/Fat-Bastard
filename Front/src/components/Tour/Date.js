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
  the_fat_concert_city: city,
  the_fat_concert_dates: date,
  the_fat_concert_venue: venue,
  the_fat_url_billetterie: tickets,
  the_fat_url_google_maps: map,
}) => {
  // const splitDate = date[0].split('-');

  return (
    <div className="tour-date">
      {/* <div className="tour-date-date">
        <p>
          {splitDate[2]}
          <MdStar className="tour-date-date-star" />
          {splitDate[1]}
        </p>
        <p className="tour-date-date-year">{splitDate[0]}</p>
      </div>
      <div className="tour-date-city">{city[0]}</div>
      <div className="tour-date-venue">{venue[0]}</div>
      <a href={map[0]} className="tour-date-map">
        <MdPinDrop />
      </a>
      <a href={tickets[0]} className="tour-date-ticket">
        <FaTicketAlt />
      </a> */}
    </div>
  );
};

Date.propTypes = {
  the_fat_concert_dates: Proptypes.arrayOf(
    Proptypes.string.isRequired,
  ).isRequired,
  the_fat_concert_city: Proptypes.arrayOf(
    Proptypes.string.isRequired,
  ).isRequired,
  the_fat_concert_venue: Proptypes.arrayOf(
    Proptypes.string.isRequired,
  ).isRequired,
  the_fat_url_billetterie: Proptypes.arrayOf(
    Proptypes.string.isRequired,
  ),
  the_fat_url_google_maps: Proptypes.arrayOf(
    Proptypes.string.isRequired,
  ),
};

Date.defaultProps = {
  the_fat_url_billetterie: ['#'],
  the_fat_url_google_maps: ['#'],
};

/**
 * Export
 */

export default Date;
