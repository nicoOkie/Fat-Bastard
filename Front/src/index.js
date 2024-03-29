/**
 * NPM import
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

import store from 'src/store';

import {
  loadVideos,
  loadTourDates,
  loadNews,
  loadSectionTitles,
  loadSectionDisco,
  loadSectionAbout,
  loadSectionAboutDescription,
  loadSectionBackground,
  loadPictures,
  loadDiscoPics,
  loadAboutPics,
  loadDiscoVerso,
  loadPlayerV1,
  loadPlayerV2,
} from 'src/store/reducer';


/**
 * Render
 */
// 1. Le composant racine à rendre (le tronc de l'arbre)
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);
// 2. La cible dans le DOM
const target = document.getElementById('root');

// rendu de react-dom : react VERS dom
render(rootComponent, target);

// Chargement des data
store.dispatch(loadSectionTitles());
store.dispatch(loadNews());
store.dispatch(loadTourDates());
store.dispatch(loadSectionDisco());
store.dispatch(loadSectionAbout());
store.dispatch(loadSectionAboutDescription());
store.dispatch(loadSectionBackground());
store.dispatch(loadPictures());
store.dispatch(loadVideos());
store.dispatch(loadDiscoPics());
store.dispatch(loadAboutPics());
store.dispatch(loadDiscoVerso());
store.dispatch(loadPlayerV1());
store.dispatch(loadPlayerV2());
