/**
 * NPM Import
 */
import React from 'react';
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaEnvelopeSquare,
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
  <nav className="social">
    <div className="social-link"><FaEnvelopeSquare /></div>
    <a href="" className="social-link" target="_blank"><FaFacebookSquare /></a>
    <a href="" className="social-link" target="_blank"><FaYoutubeSquare /></a>
    <a href="" className="social-link" target="_blank"><FaInstagram /></a>
  </nav>
);

export default Social;
