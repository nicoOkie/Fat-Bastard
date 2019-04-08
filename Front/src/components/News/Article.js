/**
 * NPM Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

/**
 * Code
 */
const Article = ({ title, date: { year, month, day }, content }) => (
  <article className="news-article">
    <div className="news-article-split" />
    <h2 className="news-article-header">{ReactHtmlParser(title)}</h2>
    <aside className="news-article-aside">
      <p className="news-article-aside-date">{day}-{month}</p>
      <p className="news-article-aside-date">{year}</p>
    </aside>
    <section className="news-article-section">
      <div className="news-article-section-content">
        {ReactHtmlParser(content)}
      </div>
    </section>
  </article>
);


Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.shape({
    year: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
};
/**
 * Export
 */

export default Article;
