/**
 * NPM import
 */
import React from 'react';
import { slide as Slide } from 'react-burger-menu';

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
      <a href={`#${link}`} className="nav-nav-link">{link}</a>
    ))}
  </Slide>
);

/**
 * Export
 */
export default Menu;
