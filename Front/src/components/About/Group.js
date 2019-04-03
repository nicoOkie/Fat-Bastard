/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

// Styles
import './about.scss';

/**
 * Code
 */
const Group = ({ aboutItems }) => (
  <div className="about-group">
    {aboutItems.map(about => (
      <div key={about.id} className="about-person" {...about}>
        <img className="about-picture" src={about.musicienpicture} alt="person" />
        <p className="about-picturetext">{about.custom_fields.first_name}</p>
      </div>
    ))}
  </div>
);

Group.propTypes = {
  aboutItems: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Group;
