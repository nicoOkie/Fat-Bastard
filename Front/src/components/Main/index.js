/**
 * NPM import
 */
import React from 'react';

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
 * Export
 */
export default Main;
