/**
 * NPM Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Local Import
 */
import Article from './Article';

// Styles
import './news.scss';

/**
 * Code
 */
const News = ({ news, loaded }) => (
  <div className="news special-width">
    {loaded ? (news.map(article => (
      <Article key={article.id} {...article} />
    ))) : (<p>waiting</p>)}
  </div>
);

News.propTypes = {
  news: PropTypes.array.isRequired,
  loaded: PropTypes.bool.isRequired,
};
/**
 * Export
 */

export default News;
