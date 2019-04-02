/**
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Local import
 */
import reducer from 'src/store/reducer';

// Middlewares
import sectionMiddleware from './sectionMiddleware';
import tourMiddleware from './tourMiddleware';
import middlewareDisco from './middlewareDisco';
import middlewareAbout from './middlewareAbout';
import middlewareAboutDescription from './middlewareAboutDescription';
import middlewareSectionBackground from './middlewareSectionBackground';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Composition des enchancers
const enhancers = composeEnhancers(
  applyMiddleware(
    sectionMiddleware,
    tourMiddleware,
    middlewareDisco,
    middlewareAbout,
    middlewareAboutDescription,
    middlewareSectionBackground,
  ),
);

/**
 * Store
 */
const store = createStore(
  reducer,
  enhancers,
);

/**
 * Export
 */
export default store;
