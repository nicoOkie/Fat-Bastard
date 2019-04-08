/**
 * NPM import
 */
import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';


/**
 * Local import
 */

// Styles
import './videoSlider.scss';

/**
 * Code
 */
const VideoSlider = ({ videos }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {videos.map(video => (
        <YouTube
          key={video}
          videoId={video}
          opts={{
            width: '100%',
          }}
        />
      ))}
    </Slider>
  );
};

VideoSlider.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default VideoSlider;
