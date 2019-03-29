/**
 * NPM import
 */
import React from 'react';


/**
 * Local import
 */
import VideoSlider from 'src/components/VideoSlider';

// Styles
import './media.scss';
/**
 * Code
 */
const Media = () => (
  <div className="media special-width">
    <div className="media-video-one">
      Video principale
    </div>
    <div className="media-video-carousel">
      <VideoSlider />
    </div>
  </div>
);

/**
 * Export
 */
export default Media;
