/**
 * NPM import
 */
import React, { useState } from 'react';

/**
 * Local import
 */
import Discoscreen from 'src/containers/Discoscreen';
import Discomobile from 'src/containers/Discomobile';

// Styles

/**
 * Code
 */

const Discography = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return (
    <div id="disco" className="discography">
      {width > 1224 ? <Discoscreen /> : <Discomobile />}
    </div>
  );
};

/**
 * Export
 */
export default Discography;
