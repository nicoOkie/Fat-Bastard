/**
 * NPM import
 */
import React from 'react';

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
        <p key={aboutdescriptionItems.id}>{aboutdescriptionItems.content.rendered}</p>
      </div>
    ) : (
      <p>waiting</p>
    )}
  </div>
);


/**
 * Export
 */
export default Description;
