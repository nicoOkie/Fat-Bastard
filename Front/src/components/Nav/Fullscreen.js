/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Social from 'src/components/Social';

// Styles

/**
 * Code
 */
const Fullscreen = ({ menuItems }) => (
  <>
    <nav className="nav-nav">
      <a href="#home" className="nav-nav-link">Accueil</a>
      {menuItems.map(link => (
        <a key={link} href={`#${link}`} className="nav-nav-link">{link}</a>
      ))}
    </nav>

    <Social className="nav-social" />
  </>
);

Fullscreen.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Fullscreen;
