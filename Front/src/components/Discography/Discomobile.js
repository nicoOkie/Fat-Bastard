/**
 * NPM import
 */
import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { FaCartArrowDown } from 'react-icons/fa';

/**
 * Local import
 */

// Styles

/**
 * Code
 */
const Discomobile = ({ discoImages, discoDatas }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const newArray = [];
  for (let index = 0; index < discoDatas.length; index += 1) {
    const array = [discoDatas[index], discoImages[index]];
    newArray.push(array);
  }

  return (
    <Slider {...settings}>
      {newArray.map(disco => (
        <div key={disco[0].id} className="discomobile" {...disco}>
          <img className="discomobile-pic" src={disco[1]} alt={`cover-${disco[0].title.rendered}`} />
          <p className="discomobile-text">{disco[0].title.rendered}</p>
          <a className="discomobile-link" href={disco[0].custom_fields.purchase_link}><FaCartArrowDown /> Acheter</a>
        </div>
      ))}
    </Slider>
  );
};

/**
 * Proptypes
 */

Discomobile.propTypes = {
  discoImages: PropTypes.array.isRequired,
  discoDatas: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

/**
 * Export
 */
export default Discomobile;
