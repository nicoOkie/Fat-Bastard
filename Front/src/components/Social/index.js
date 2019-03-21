/**
 * NPM Import
 */
import React from 'react';
import {
  FaYoutubePlay,
  FaFacebookSquare,
  FaInstagram,
  FaEnvelopeO,
} from 'react-icons/fa';

/**
 * Local Import
 */

// Styles
import './social.scss';

/**
  * Code
  */

const Social = () => (
  <div id="social">
    <FaEnvelopeO />
    <FaFacebookSquare />
    <FaYoutubePlay />
    <FaInstagram />
  </div>
);

export default Social;
