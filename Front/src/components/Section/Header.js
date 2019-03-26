/**
 * NPM import
 */
import React from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';

/**
 * Local import
 */

// Styles


/**
 * Code
 */
const Header = ({ name, title, bgp }) => {
  const Heading = styled.header`
    height: 60vh;
    background-image: url(${bgp});
    background-position: cover;
  `;

  return (
    <Heading id={name} className="header">
      <h1 className="header-title">{title}</h1>
    </Heading>
  );
};

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
