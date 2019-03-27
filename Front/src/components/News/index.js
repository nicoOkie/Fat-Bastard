/**
 * NPM Import
 */
import React from 'react';


/**
 * Local Import
 */
import Article from './Article';

// Styles
import './news.scss';

/**
 * Code
 */
const News = () => (
  <div className="news special-width">
    <Article />
    <Article />
    <Article />
  </div>
);


/**
 * Export
 */

export default News;
