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

// Styles


/**
 * Code
 */
const Content = ({ id }) => (
  <div>
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
