/**
 * NPM import
 */
import React from 'react';
import Proptypes from 'prop-types';

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
const Section = ({
  title,
  background,
}) => (
  <div id={title} className="section">
    <Header title={title} bgp={background} name={title} />
    <Content id={title} />
  </div>
);

// Props validation

Section.propTypes = {
  title: Proptypes.string.isRequired,
  background: Proptypes.string.isRequired,
};


/**
 * Export
 */
export default Section;
