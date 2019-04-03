/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

/**
 * Local import
 */

// Styles
import './about.scss';

/**
 * Code
 */
const Description = ({ aboutdescriptionItems, loaded }) => (
  <div className="about-description">
    {loaded ? (
      <div className="about-text">
        <h1>{aboutdescriptionItems.title.rendered}</h1>
        <p key={aboutdescriptionItems.id}>{ReactHtmlParser(aboutdescriptionItems.content.rendered)}
        </p>
      </div>
    ) : (
      <p>waiting</p>
    )}
  </div>
);

Description.propTypes = {
  loaded: PropTypes.bool.isRequired,
  aboutdescriptionItems: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
    id: PropTypes.number.isRequired,
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

/**
 * Export
 */
export default Description;
