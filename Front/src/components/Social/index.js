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
    <a href="https://fr-fr.facebook.com/fat.bastard.gb/" className="social-link" target="_blank"><FaFacebookSquare /></a>
    <a href="https://www.youtube.com/channel/UC52mTFRAtoccXaSzCjcOXyA" className="social-link" target="_blank"><FaYoutubeSquare /></a>
    <a href="https://www.instagram.com/thefatbastardgangband/" className="social-link" target="_blank"><FaInstagram /></a>
  </nav>
);

export default Social;
