/**
 * NPM import
 */
import React from 'react';
// import styled from 'styled-components';
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
        className="header"
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
//   const Heading = styled.header`
//     height: 60vh;
//     background-image: url(${bgp});
//     background-position: cover;
//   `;

//   return (
//     <Heading id={name} className="header">
//       <h1 className="header-title">{title}</h1>
//     </Heading>
//   );
// };

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
