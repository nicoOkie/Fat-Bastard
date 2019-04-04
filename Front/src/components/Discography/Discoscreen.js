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

const Discoscreen = ({ discoItems }) => (
  <div className="discoscreen">
    {discoItems.map(disco => (
      <div key={disco.id} className="discoscreen-section">
        <img src={disco.custom_fields.album_first_side} className="discoscreen-pic" alt={`cover-${disco.title.rendered}`} />
        <p className="discoscreen-text">{disco.title.rendered}</p>
      </div>
    ))}
  </div>
);

/**
 * Prop-types
 */
Discoscreen.propTypes = {
  discoItems: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};


/**
 * Export
 */
export default Discoscreen;
