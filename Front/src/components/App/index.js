/**
 * NPM import
 */
import React from 'react';
import axios from 'axios';

/**
 * Local import
 */
import './app.scss';
// import NormalizrTest from '../NormalizrTest';

/**
 * Code
 */
const App = () => (
  <div id="app">
    {axios.get('http://localhost/fat-apotheose/wp-json/wp/v2/pages')
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })}
  </div>
);

/**
 * Export
 */
export default App;
