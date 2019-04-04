/**
 * NPM import
 */
import React from 'react';
import { slide as Slide } from 'react-burger-menu';
import PropTypes from 'prop-types';

/**
 * Local import
 */

// Styles

/**
 * Code
 */
const Menu = ({ burgerItems }) => (
  <Slide right>
    <a href="#home" className="nav-nav-link">Accueil</a>
    {burgerItems.map(link => (
      <a key={link} href={`#${link}`} className="nav-nav-link">{link}</a>
    ))}
  </Slide>
);

/**
 * PropTypes
 */
Menu.propTypes = {
  burgerItems: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Menu;
