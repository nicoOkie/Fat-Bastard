/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import coverdata from 'src/coverdata';


// Styles
import './discography.scss';
/**
 * Code
 */
const Discoscreen = () => (
  <div className="discoscreen">
    {coverdata.map(coverlarge => (
      <div key={coverlarge.id}>
        <img src={coverlarge.cover} alt={`cover-${coverlarge.name}`} />
        <p>{coverlarge.name}</p>
      </div>
    ))}
  </div>
);

/**
 * Export
 */
export default Discoscreen;
