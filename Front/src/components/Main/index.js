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
  menuItems,
  backgroundItems,
  titlesLoad,
  backgroundLoad,
}) => {
  if (backgroundLoad && titlesLoad === true) {
  <div id="main">
    {menuItems.map(section => (
      <Section key={section.title} {...section} {...backgroundItems} />
    )}
  </div>
     } else {
    <p>Waiting</p>
     }
    
    };
 


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
