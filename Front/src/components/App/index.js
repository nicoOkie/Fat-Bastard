/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Nav from 'src/components/Nav';
import Main from 'src/components/Main';
import Footer from 'src/components/Footer';

// Styles
import './app.scss';
/**
 * Code
 */
const App = () => (
  <div id="app">
    <Nav />
    <Main />
    <Footer />
  </div>
);

/**
 * Export
 */
export default App;
