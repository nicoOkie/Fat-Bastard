/**
 * NPM Import
 */
import React from 'react';
import {
  FaFacebookSquare,
  FaYoutube,
  FaEnvelope,
  FaInstagram,
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
  <nav id="social">
    <FaEnvelope />
    <a href="" target="_blank"><FaFacebookSquare /></a>
    <a href="" target="_blank"><FaYoutube /></a>
    <a href="" target="_blank"><FaInstagram /></a>
  </nav>
);

export default Social;
