/**
 * NPM Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Local Import
 */
import Date from './Date';

// Styles
import './tour.scss';

/**
 * Code
 */
const Tour = ({ dates }) => (
  <div className="tour special-width">
    {dates.map(date => (
      <Date key={date.id} {...date.custom_fields} />
    ))}
  </div>
);

Tour.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
/**
 * Export
 */

export default Tour;
