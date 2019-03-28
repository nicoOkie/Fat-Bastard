/**
 * NPM import
 */
import React from 'react';
import Proptypes from 'prop-types';

/**
 * Local import
 */
import Contact from 'src/components/Contact';
import Tour from 'src/components/Tour';
import Dummy from 'src/components/Dummy';
// eslint-disable-next-line import/no-unresolved
import About from 'src/components/About';

// Styles


/**
 * Code
 */
const Content = ({ id }) => (
  <div>
    {id === 'about' && <About />}
    {id === 'disco' && <Dummy />}
    {id === 'media' && <Dummy />}
    {id === 'news' && <Dummy />}
    {id === 'contact' && <Contact />}
    {id === 'tour' && <Tour />}
  </div>
);

Content.propTypes = {
  id: Proptypes.string.isRequired,
};

/**
 * Export
 */
export default Content;
