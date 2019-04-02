/**
 * NPM Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { sortBy } from 'lodash';


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
    let newDates = dates.map(date => (
      {
        id: date.id,
        date: date.custom_fields.date[0],
        city: date.custom_fields.city[0],
        venue: date.custom_fields.venue[0],
        map: date.custom_fields.map[0],
        tickets: date.custom_fields.tickets[0],
      }
    ));

    newDates = sortBy(newDates, ['date']);
    console.log(newDates);

    return (
      <div className="tour special-width">
        {newDates.map(date => (
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
