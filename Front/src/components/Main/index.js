/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Section from 'src/components/Section';
import sectionData from 'src/sections';


// Styles
import './main.scss';
/**
 * Code
 */
const Main = () => (
  <div id="main">
    {sectionData.map(section => (
      <Section key={section.name} {...section} />
    ))}
  </div>
);

/**
 * Export
 */
export default Main;
