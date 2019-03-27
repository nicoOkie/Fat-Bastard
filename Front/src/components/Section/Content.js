/**
 * NPM import
 */
import React from 'react';
import Proptypes from 'prop-types';

/**
 * Local import
 */
import News from 'src/components/News';
import Tour from 'src/components/Tour';
import Contact from 'src/components/Contact';

// Styles


/**
 * Code
 */
const Content = ({ id }) => (
  <div className="content">
    {id === 'news' && <News />}
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
