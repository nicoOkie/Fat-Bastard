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
const Group = ({
  aboutItems,
  aboutPictures,
}) => {
  const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: 0,
    shiftY: 40,
  };
  const aboutPicture = [];
  for (let i = 0; i < aboutPictures.length; i += 1) {
    if (aboutPictures[i] !== false) {
      aboutPicture.push(aboutPictures[i]);
    }
  }
  const aboutThinks = [];
  for (let x = 0; x < aboutItems.length; x += 1) {
    if (aboutItems[x] !== aboutItems[7]) {
      aboutThinks.push(aboutItems[x]);
    }
  }
  const newArrayAbout = [];
  for (let index = 0; index < aboutThinks.length; index += 1) {
    const array = [aboutThinks[index], aboutPicture[index]];
    newArrayAbout.push(array);
  }

  return (
    <div className="about-group">
      {newArrayAbout.map(about => (
        <div key={about[0].id} className="about-person" {...about}>
          <ReactHover
            options={optionsCursorTrueWithMargin}
          >
            <ReactHover.Trigger type="trigger">
              <img className="about-picture" src={about[1]} alt="person" />
            </ReactHover.Trigger>
            <ReactHover.Hover type="hover">
              <div className="about-hoverdiv">
                <p className="about-picturetext about-hoverp">{about[0].custom_fields.first_name}</p>
                <p className="about-hoverp">{about[0].custom_fields.last_name}</p>
                <p className="about-hoverp">{ReactHtmlParser(about[0].content.rendered)}</p>
                <p className="about-hoverp">{about[0].custom_fields.instruments}</p>
              </div>
            </ReactHover.Hover>
          </ReactHover>
        </div>
      ))}
    </div>
  );
};

Group.propTypes = {
  aboutItems: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  aboutPictures: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default Group;
