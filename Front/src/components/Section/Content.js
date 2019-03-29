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
<<<<<<< HEAD
import Media from 'src/components/Media';
=======
import Dummy from 'src/components/Dummy';
import Discography from 'src/components/Discography';
>>>>>>> ec51f52260d5b116d46ef66d5305749606b01661
import About from 'src/components/About';
import Disco from '../Disco';

// Styles


/**
 * Code
 */
const Content = ({ id }) => (
  <div className="content">
    {id === 'news' && <News />}
    {id === 'tour' && <Tour />}
<<<<<<< HEAD
    {id === 'disco' && <Disco />}
    {id === 'media' && <Media />}
=======
    {id === 'disco' && <Discography />}
    {id === 'media' && <Dummy />}
>>>>>>> ec51f52260d5b116d46ef66d5305749606b01661
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
