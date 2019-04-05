/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */


// Styles
import './discography.scss';
/**
 * Code
 */

const Discoscreen = ({
  discoImages,
  discoDatas,
  loaddiscoImages,
  loaddiscoDatas,
}) => {
  const newArray = [];
  for (let index = 0; index < discoDatas.length; index += 1) {
    const array = [discoDatas[index], discoImages[index]];
    newArray.push(array);
  }

  return (
    <>
      {(loaddiscoDatas && loaddiscoImages && (
      <div className="discoscreen">
        {newArray.map(disco => (
          <div key={disco[0].id} className="discoscreen-section">
            <img src={disco[1]} className="discoscreen-pic" alt={`cover-${disco[0].title.rendered}`} />
            <p className="discoscreen-text">{disco[0].title.rendered}</p>
          </div>
        ))}
      </div>
      )) || ((
      <p>Waiting</p>
      ))}
    </>
  );
};

Discoscreen.propTypes = {
  discoImages: PropTypes.array.isRequired,
  discoDatas: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  loaddiscoDatas: PropTypes.bool.isRequired,
  loaddiscoImages: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Discoscreen;
