/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import aboutpictureData from 'src/aboutpicture';

// Styles
import './about.scss';

/**
 * Code
 */
const Group = () => {
  const { allmusicien } = aboutpictureData;

  return (
    <div className="about-group">
      {allmusicien.map(truc => (
        <div className="about-person" {...truc}>
          <img className="about-picture" src={`${truc.musicienpicture}`} alt="person" />
          <p className="about-picturetext">{truc.musicien}</p>
        </div>
      ))}
    </div>
  );
};

/**
 * Export
 */
export default Group;
