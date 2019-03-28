/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import descript from 'src/descript';

// Styles


/**
 * Code
 */
const Description = () => {
  const { bidule } = descript;

  return (
    <div className="about-description">
      <div className="about-text">
        <h1>{bidule[0].aboutTitle}</h1>
        {bidule.map(chose => (
          <p {...chose}>{chose.aboutText}</p>
        ))}
      </div>
    </div>
  );
};

/**
 * Export
 */
export default Description;
