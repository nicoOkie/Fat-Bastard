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
  name,
  title,
  background,
  content,
}) => (
  <div id={name} className="section">
    <Header title={title} bgp={background} name={name} />
    <Content content={content} id={name} />
  </div>
);

// Props validation

Section.propTypes = {
  name: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  background: Proptypes.string.isRequired,
  content: Proptypes.string.isRequired,
};


/**
 * Export
 */
export default Section;
