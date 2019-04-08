/**
 * Npm import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Local import
 */
import reducer from 'src/store/reducer';

// Middlewares
import sectionMiddleware from './middlewares/sectionMiddleware';
import newsMiddleware from './middlewares/newsMiddleware';
import tourMiddleware from './middlewares/tourMiddleware';
import middlewareDisco from './middlewares/middlewareDisco';
import videosMiddleware from './middlewares/videosMiddleware';
import middlewareAbout from './middlewares/middlewareAbout';
import middlewareAboutDescription from './middlewares/middlewareAboutDescription';
import middlewareSectionBackground from './middlewares/middlewareSectionBackground';
import mediaMiddleware from './middlewares/mediaMiddleware';
import playerV1Midlleware from './middlewares/playerV1Middleware';
import playerV2Middleware from './middlewares/playerV2Middleware';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Composition des enchancers
const enhancers = composeEnhancers(
  applyMiddleware(
    sectionMiddleware,
    newsMiddleware,
    tourMiddleware,
    middlewareDisco,
    videosMiddleware,
    middlewareAbout,
    middlewareAboutDescription,
    middlewareSectionBackground,
    mediaMiddleware,
    playerV1Midlleware,
    playerV2Middleware,
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
