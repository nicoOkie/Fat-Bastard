/**
 * NPM import
 */
import React from 'react';
import Proptypes from 'prop-types';

/**
 * Local import
 */
import News from 'src/components/News';
import Tour from 'src/containers/Tour';
import Contact from 'src/components/Contact';
import Media from 'src/components/Media';
import Discography from 'src/components/Discography';
import About from 'src/components/About';

// Styles


/**
 * Code
 */
const Content = ({ id }) => (
  <div className="content">
    {id === 'news' && <News />}
    {id === 'tour' && <Tour />}
    {id === 'media' && <Media />}
    {id === 'disco' && <Discography />}
    {id === 'about' && <About />}
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
