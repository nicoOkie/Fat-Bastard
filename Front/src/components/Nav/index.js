/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Social from 'src/components/Social';

// Styles
import './nav.scss';

/**
 * Code
 */
const Nav = () => (
  <div className="nav">
    <nav>
      <a href="#">Accueil</a>
      <a href="#">News</a>
      <a href="#">Tour</a>
      <a href="#">Disocgraphie</a>
      <a href="#">Media</a>
      <a href="#">À Propos</a>
      <a href="#">Contact</a>
    </nav>

    <Social />
  </div>
);

/**
 * Export
 */
export default Nav;
