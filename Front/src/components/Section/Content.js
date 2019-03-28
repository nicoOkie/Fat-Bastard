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
import Dummy from 'src/components/Dummy';

// Styles


/**
 * Code
 */
const Content = ({ id }) => (
  <div className="content">
    {id === 'news' && <News />}
    {id === 'tour' && <Tour />}
    {id === 'disco' && <Dummy />}
    {id === 'media' && <Dummy />}
    {id === 'about' && <Dummy />}
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
