/**
 * NPM Import
 */
import React from 'react';


/**
 * Local Import
 */
import Date from './Date';
import Data from '../../../../data';

// Styles
import './tour.scss';

/**
 * Code
 */
const Tour = () => {
  const { tour } = Data;

  return (
    <div className="tour special-width">
      {tour.map(date => (
        <Date key={date.id} {...date} />
      ))}
    </div>
  );
};

/**
 * Export
 */

export default Tour;
