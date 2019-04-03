/**
 * NPM Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Local Import
 */
import { upCommingShow } from 'src/utils/tourCleaner';
import Date from './Date';

// Styles
import './tour.scss';

/**
 * Code
 */
const Tour = ({ dates, loaded }) => {
  if (loaded) {
    const shows = dates.filter(date => upCommingShow(date.date));

    return (
      <div className="tour special-width">
        {shows.map(date => (
          <Date key={date.id} {...date} />
        ))}
      </div>
    );
  }

  return (<p>loading</p>);
};

Tour.propTypes = {
  dates: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  loaded: PropTypes.bool.isRequired,
};
/**
 * Export
 */

export default Tour;
