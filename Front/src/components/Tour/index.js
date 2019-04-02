/**
 * NPM Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { orderBy } from 'lodash';


/**
 * Local Import
 */
import Date from './Date';

// Styles
import './tour.scss';

/**
 * Code
 */
const Tour = ({ dates, loaded }) => {

  if (loaded) {
    console.log(dates);
    const newDates = dates.map(date => (
      {
        id: date.id,
        date: date.custom_fields.date,
      }
    ));
    console.log(newDates);
  }


  return (
    <div className="tour special-width">
      {/* {dates.map(date => (
        <Date key={date.id} {...date.custom_fields} />
      ))} */}
    </div>
  );
};

Tour.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
/**
 * Export
 */

export default Tour;
