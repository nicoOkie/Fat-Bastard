/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import headerbackgroundData from 'src/headerbackground';
import Proptypes from 'prop-types';
// Styles
import './home.scss';
/**
 * Code
 */

const Home = () => {

const { backgroundTigre, backgroundPhono, backgroundLogo, backgroundMain, backgroundBalkan } = headerbackgroundData;

  return (
  <div className="home" id="home">
    <img className="home-logo" src={`${backgroundLogo}`}/>
    <div className="home-flexlogo">
        <img className="home-tigre" src={`${backgroundTigre}`}/>
        <img className="home-phono" src={`${backgroundPhono}`}/>
        <img className="home-main" src={`${backgroundMain}`}/>
        <img className="home-balkan" src={`${backgroundBalkan}`}/>
    </div>
  </div>
  );
};

// PropTypes

Home.propTypes = {
  backgroundTigre: Proptypes.string.isRequired,
  backgroundPhono: Proptypes.string.isRequired,
  backgroundLogo: Proptypes.string.isRequired,
  backgroundMain: Proptypes.string.isRequired,
  backgroundBalkan: Proptypes.string.isRequired,
};

// href={`mailto:${contactMail}`}
/**
 * Export
 */
export default Home;
