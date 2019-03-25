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
const Menu = () => (
  <Slide right>
    <a href="#" className="nav-nav-link">Accueil</a>
    <a href="#" className="nav-nav-link">News</a>
    <a href="#" className="nav-nav-link">Tour</a>
    <a href="#" className="nav-nav-link">Disocgraphie</a>
    <a href="#" className="nav-nav-link">Media</a>
    <a href="#" className="nav-nav-link">À Propos</a>
    <a href="#" className="nav-nav-link">Contact</a>
  </Slide>
);

/**
 * Export
 */
export default Menu;
