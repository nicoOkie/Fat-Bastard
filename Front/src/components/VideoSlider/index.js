/**
 * NPM import
 */
import React from 'react';
import Slider from 'react-slick';


/**
 * Local import
 */

// Styles
import './videoSlider.scss';

/**
 * Code
 */
const VideoSlider = () => {
  const settings = {
    className: 'carousel-video',
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swapToSlide: true,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
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
      <div className="carousel-video-single">Vid 1</div>
      <div className="carousel-video-single">Vid 2</div>
      <div className="carousel-video-single">Vid 3</div>
      <div className="carousel-video-single">Vid 4</div>
      <div className="carousel-video-single">Vid 5</div>
    </Slider>
  );
};

/**
 * Export
 */
export default VideoSlider;