/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Section from 'src/components/Section';


// Styles
import './main.scss';
/**
 * Code
 */
const Main = ({
  unitedItems,
  titlesLoaded,
  backgroundLoaded,
}) => (
  <>
    {(titlesLoaded && backgroundLoaded && (
      <div id="main">
        {unitedItems.map(unitedItem => (
          <Section key={unitedItem.title} {...unitedItem} />
        ))}
      </div>
    )) || (
      <p>Waiting</p>
    )}
  </>
);

/**
 * Prop-types
 */

Main.propTypes = {
  unitedItems: PropTypes.array.isRequired,
  titlesLoaded: PropTypes.bool.isRequired,
  backgroundLoaded: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Main;
