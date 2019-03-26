/**
 * NPM import
 */
import React from 'react';
import Proptypes from 'prop-types';

/**
 * Local import
 */
import Contact from 'src/components/Contact';
// Styles


/**
 * Code
 */
const Content = ({ id }) => (
  <div>
    {id === 'contact' && <Contact />}
  </div>
);

Content.propTypes = {
  id: Proptypes.string.isRequired,
};

/**
 * Export
 */
export default Content;