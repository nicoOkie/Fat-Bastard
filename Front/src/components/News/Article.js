/**
 * NPM Import
 */
import React from 'react';


/**
 * Local Import
 */
import endshow from '../../../../assets/end-show.jpg';
// Styles


/**
 * Code
 */
const Article = () => (
  <article className="news-article">
    <div className="news-article-split" />
    <header className="news-article-header">
      <h2 className="news-article-header-title">title.rendered</h2>
    </header>
    <aside className="news-article-aside">
      <p className="news-article-aside-date">customFunction(date)</p>
    </aside>
    <section className="news-article-section">
      <img src={endshow} alt="the fat team after a gig" className="news-article-section-img" />
      <p className="news-article-section-content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Laborum magni molestias tempore officiis cumque id, repudiandae sint
        perspiciatis ullam fugit, placeat porro dolorum exercitationem
        voluptates? Nisi maiores sit facere doloremque?
      </p>
    </section>
  </article>
);


/**
 * Export
 */

export default Article;
