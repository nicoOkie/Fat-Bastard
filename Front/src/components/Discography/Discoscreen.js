/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FaCartArrowDown } from 'react-icons/fa';

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
  discoVerso,
}) => {
  const newArray = [];
  for (let index = 0; index < discoDatas.length; index += 1) {
    const array = [discoDatas[index], discoImages[index], discoVerso[index]];
    newArray.push(array);
  }

  return (
    <>
      {(loaddiscoDatas && loaddiscoImages && (
      <div className="discoscreen">
        {newArray.map(disco => (
          <div key={disco[0].id} className="discoscreen-section">
            <div className="flip">
              <img src={disco[1]} className="flip-back flip-card" alt={`cover-${disco[0].title.rendered}`} />
              <img src={disco[2]} className="flip-front flip-card" alt={`cover-${disco[0].title.rendered}`} />
            </div>
            <p className="discoscreen-text">{disco[0].title.rendered}</p>
            <a className="discoscreen-link" href={disco[0].custom_fields.purchase_link}><FaCartArrowDown /> Acheter</a>
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
  discoVerso: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default Discoscreen;
