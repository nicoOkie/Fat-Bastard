/**
 * NPM Import
 */
import React from 'react';
import PropTypes from 'prop-types';


/**
 * Local Import
 */
import endshow from '../../../../assets/end-show.jpg';
// Styles


/**
 * Code
 */
const Article = ({ title, date, content }) => {
  console.log();

  return (
    <article className="news-article">
      <div className="news-article-split" />
      <header className="news-article-header">
        <h2 className="news-article-header-title">{title.rendered}</h2>
      </header>
      <aside className="news-article-aside">
        <p className="news-article-aside-date">{date}</p>
      </aside>
      <section className="news-article-section">
        {/* <img src={endshow} alt="the fat team after a gig" className="news-article-section-img" /> */}
        <p className="news-article-section-content">{content.rendered}</p>
      </section>
    </article>
  );
};

Article.propTypes = {
  title: PropTypes.shape(
    PropTypes.string.isRequired,
  ).isRequired,
};
/**
 * Export
 */

export default Article;
