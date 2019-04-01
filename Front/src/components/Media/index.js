/**
 * NPM import
 */
import React from 'react';


/**
 * Local import
 */
import VideoSlider from 'src/components/VideoSlider';
import Gallery from 'src/components/Gallery';

// Styles
import './media.scss';
/**
 * Code
 */
const Media = () => (
  <div className="media special-width">
    <section className="media-video">
      <div className="media-video-one">
        Video principale
      </div>

      <div className="media-video-carousel">
        <VideoSlider />
      </div>
    </section>

    <Gallery />
  </div>
);

/**
 * Export
 */
export default Media;
