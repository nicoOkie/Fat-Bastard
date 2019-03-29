/**
 * NPM import
 */
import React from 'react';
import Slider from 'react-slick';

/**
 * Local import
 */
import coverdata from 'src/coverdata';

// Styles

/**
 * Code
 */
const Discomobile = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {coverdata.map(cover => (
        <div key={cover.id} className="discomobile" {...cover}>
          <img src={cover.cover} alt={`cover-${cover.name}`} />
          <p>{cover.name}</p>
        </div>
      ))}
    </Slider>
  );
};

/**
 * Export
 */
export default Discomobile;
