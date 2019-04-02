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

// {loaded ? (
//   <div className="about-text">
//     <h1>{aboutdescriptionItems.title.rendered}</h1>
//     <p key={aboutdescriptionItems.id}>{aboutdescriptionItems.content.rendered}</p>
//   </div>
// ) : (
//   <p>waiting</p>
// )}

/**
 * Export
 */
export default Main;
