/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Group from 'src/containers/Aboutgroup';
import Description from 'src/containers/Aboutdescription';

// Styles
import './about.scss';

/**
 * Code
 */
const About = () => (
  <div className="about">
    <Group />
    <Description />
  </div>
);

/**
 * Export
 */
export default About;
