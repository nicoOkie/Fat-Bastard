/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */


// Styles
import './discography.scss';
/**
 * Code
 */

const Discoscreen = ({ discoImages, discoDatas }) => (
  <div className="discoscreen">
    {discoDatas.map(disco => (
      <div key={disco.id} className="discoscreen-section">
        <p className="discoscreen-text">{disco.title.rendered}</p>
        <img src={disco} className="discoscreen-pic" alt={`cover-${disco.title.rendered}`} />
      </div>
    ))}
  </div>
);

/**
 * Prop-types
 */
// Discoscreen.propTypes = {
//   discoItems: PropTypes.arrayOf(
//     PropTypes.object.isRequired,
//   ).isRequired,
// };


/**
 * Export
 */
export default Discoscreen;
