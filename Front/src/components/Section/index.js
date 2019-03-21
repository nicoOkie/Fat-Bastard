/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Header from './Header';
import Content from './Content';

// Styles
import './section.scss';

/**
 * Code
 */
const Section = () => (
  <div id="section">
    <Header />
    <Content />
  </div>
);

/**
 * Export
 */
export default Section;
