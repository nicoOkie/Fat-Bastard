/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Local import
 */


// Styles
import './gallery.scss';
/**
 * Code
 */
const Gallery = ({ gallery }) => (
  <section className="media-photo">
    <div className="media-photo-main">
      <img src={gallery[0]} alt="balkan klub final shoot" />
    </div>
    <div className="media-photo-small">
      <img src={gallery[1]} alt="trumpet solo" />
    </div>
    <div className="media-photo-small">
      <img src={gallery[2]} alt="trumpet solo" />
    </div>
    <div className="media-photo-small">
      <img src={gallery[3]} alt="trumpet solo" />
    </div>
    <div className="media-photo-small">
      <img src={gallery[4]} alt="trumpet solo" />
    </div>
    <div className="media-photo-small">
      <img src={gallery[5]} alt="trumpet solo" />
    </div>
  </section>
);

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Gallery;
