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
      <img alt="le logo du groupe" className="home-logo" src={`${backgroundLogo}`} />
      <div className="home-flexlogo">
        <img alt="badge" className="home-tigre" src={backgroundTigre} />
        <img alt="badge" className="home-phono" src={backgroundPhono} />
        <img alt="badge" className="home-main" src={backgroundMain} />
        <img alt="badge" className="home-balkan" src={backgroundBalkan} />
      </div>
    </div>
  );
};

// PropTypes

// href={`mailto:${contactMail}`}
/**
 * Export
 */
export default Home;
