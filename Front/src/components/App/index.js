/**
 * NPM import
 */
import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
/**
 * Local import
 */
import Nav from 'src/containers/Player';
import Main from 'src/containers/Mainsection';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
// Styles
import './app.scss';
/**
 * Code
 */
const App = () => (
  <ParallaxProvider>
    <div id="app">
      <Nav />
      <Home />
      <Main />
      <Footer />
    </div>
  </ParallaxProvider>
);


/**
 * Export
 */
export default App;
