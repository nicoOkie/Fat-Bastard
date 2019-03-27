/**
 * NPM import
 */
import React from 'react';
import Proptypes from 'prop-types';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

/**
 * Local import
 */

// Styles


/**
 * Code
 */
const Header = ({ name, title, bgp }) => (
  <React.Fragment>
    <ParallaxProvider>
      <ParallaxBanner
        id={name}
        style={{
          height: '74vh',
        }}
        layers={[
          {
            image: `${bgp}`,
            amount: 0.7,
          },
        ]}
      >
        <h1 className="header-title">{title}</h1>
      </ParallaxBanner>
    </ParallaxProvider>
  </React.Fragment>
);

// Props validation
Header.propTypes = {
  name: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  bgp: Proptypes.string.isRequired,
};

/**
 * Export
 */
export default Header;
