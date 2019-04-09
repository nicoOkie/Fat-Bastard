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
const Media = ({ videos: { main, vids }, loaded }) => (
  <div className="media special-width">
    {loaded && (
      <section className="media-video">
        <div className="media-video-one">
          <YouTube
            videoId={main}
            opts={{
              height: 'auto%',
              width: '100%',
            }}
          />
        </div>

        <div className="media-video-carousel">
          <VideoSlider videos={vids} />
        </div>
      </section>
    )}

    <Gallery />
  </div>
);

Media.propTypes = {
  videos: PropTypes.shape({
    main: PropTypes.string.isRequired,
    vids: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
  loaded: PropTypes.bool.isRequired,
};

/**
 * Export
 */
export default Media;
