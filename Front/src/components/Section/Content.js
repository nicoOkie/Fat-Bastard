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

// Styles


/**
 * Code
 */
const Content = ({ id }) => (
  <div>
    {id === 'about' && <Dummy />}
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
