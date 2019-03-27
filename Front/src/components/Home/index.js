/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import headerbackgroundData from 'src/headerbackground';
// Styles
import './home.scss';
/**
 * Code
 */

const Home = () => {
  const {
    backgroundTigre,
    backgroundPhono,
    backgroundLogo,
    backgroundMain,
    backgroundBalkan,
  } = headerbackgroundData;

  return (
    <div className="home" id="home">
      <img className="home-logo" src={`${backgroundLogo}`} alt="bannière" />
      <div className="home-flexlogo">
        <img className="home-circle" src={`${backgroundTigre}`} alt="badge" />
        <img className="home-circle" src={`${backgroundPhono}`} alt="badge" />
        <img className="home-circle" src={`${backgroundMain}`} alt="badge" />
        <img className="home-circle" src={`${backgroundBalkan}`} alt="badge" />
      </div>
    </div>
  );
};

/**
 * Export
 */
export default Home;
