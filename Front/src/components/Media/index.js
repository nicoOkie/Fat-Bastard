/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

/**
 * Local import
 */
import VideoSlider from 'src/components/VideoSlider';
import Gallery from 'src/containers/Gallery';

// Styles
import './media.scss';
/**
 * Code
 */
const Media = ({ videos }) => (
  <div className="media special-width">
    <section className="media-video">
      <div className="media-video-one">
        <YouTube
          videoId={videos[0]}
        />
      </div>

      <div className="media-video-carousel">
        <VideoSlider {...videos} />
      </div>
    </section>

    <Gallery />
  </div>
);

Media.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

/**
 * Export
 */
export default Media;
