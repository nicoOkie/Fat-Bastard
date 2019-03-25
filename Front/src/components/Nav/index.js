/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import FullScreen from './Fullscreen';
import Menu from './Menu';

// Styles
import './nav.scss';

/**
 * Code
 */
const Nav = () => {
  const width = window.innerWidth;
  return (
    <div className="nav">
      {width > 600 ? <FullScreen /> : <Menu />}
    </div>
  );
};

/**
 * Export
 */
export default Nav;
