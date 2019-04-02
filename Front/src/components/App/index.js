/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Nav from 'src/components/Nav';
import Main from 'src/containers/Mainsection';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
// Styles
import './app.scss';
/**
 * Code
 */
const App = () => (
  <div id="app">
    <Nav />
    <Home />
    <Main />
    <Footer />
  </div>
);


/**
 * Export
 */
export default App;
