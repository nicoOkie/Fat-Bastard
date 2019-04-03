/**
 * NPM import
 */
import ReactHover from 'react-hover';
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

/**
 * Local import
 */

// Styles
import './about.scss';

/**
 * Code
 */

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 0,
  shiftY: 40,
};

const Group = ({ aboutItems }) => (
  <div className="about-group">
    {aboutItems.map(about => (
      <div key={about.id} className="about-person" {...about}>
        <ReactHover
          options={optionsCursorTrueWithMargin}>
          <ReactHover.Trigger type="trigger">
            <img className="about-picture" src={about.musicienpicture} alt="person" />
          </ReactHover.Trigger>
          <ReactHover.Hover type="hover">
            <div className="about-hoverdiv">
              <p className="about-picturetext about-hoverp">{about.custom_fields.first_name}</p>
              <p className="about-hoverp">{about.custom_fields.last_name}</p>
              <p className="about-hoverp">{ReactHtmlParser(about.content.rendered)}</p>
              <p className="about-hoverp">{about.custom_fields.instruments}</p>
            </div>
          </ReactHover.Hover>
        </ReactHover>
      </div>
    ))}
  </div>
);

Group.propTypes = {
  aboutItems: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

// const Group = ({ aboutItems }) => (
//   <div className="about-group">
//     {aboutItems.map(about => (
//       <div key={about.id} className="about-person" {...about}>
//         <img className="about-picture" src={about.musicienpicture} alt="person" />
//         <p className="about-picturetext">{about.custom_fields.first_name}</p>
//       </div>
//     ))}
//   </div>
// );

/**
 * Export
 */
export default Group;
