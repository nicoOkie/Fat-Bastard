/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import descriptData from 'src/descript';

// Styles


/**
 * Code
 */
const Description = () => {
  const { title, texts } = descriptData;

  return (
    <div className="about-description">
      <div className="about-text">
        <h1>{title}</h1>
        {texts.map(text => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
};

/**
 * Export
 */
export default Description;
