/**
 * Local imports
 */
import { cleanTourDates } from 'src/utils/tourCleaner';

/**
 * Initial State
 */
const initialState = {
  sectionTitles: [],
  galery: [],
  albums: [],
  tourDates: [],
  loadedData: {
    tourdates: false,
  },
  sectionDisco: [],
  sectionAbout: [],
  sectionBackground: [],
  sectionAboutDescription: [],
  aboutLoaded: false,
  backgroundLoaded: false,
  titlesLoaded: false,
};

/**
 * Types
 */
// Sections import
export const LOAD_SECTION_TITLES = 'LOAD_SECTION_TITLES';
export const RECEIVED_SECTION_TITLE = 'RECEIVED_SECTION_TITLE';
// Tour Import
export const LOAD_TOUR_DATES = 'LOAD_TOUR_DATES';
export const RECEIVED_TOUR_DATES = 'RECEIVED_TOUR_DATES';
export const LOAD_SECTION_DISCO = 'LOAD_DISCO_NAME';
export const RECEIVED_SECTION_DISCO = 'RECEIVED_SECTION_DISCO';
export const LOAD_SECTION_ABOUT = 'LOAD_SECTION_ABOUT';
export const RECEIVED_SECTION_ABOUT = 'RECEIVED_SECTION_ABOUT';
export const LOAD_SECTION_ABOUT_DESCRIPTION = 'LOAD_SECTION_ABOUT_DESCRIPTION';
export const RECEIVED_SECTION_ABOUT_DESCRIPTION = 'RECEIVED_SECTION_ABOUT_DESCRIPTION';
export const LOAD_SECTION_BACKGROUND = 'LOAD_SECTION_BACKGROUND';
export const RECEIVED_SECTION_BACKGROUND = 'RECEIVED_SECTION_BACKGROUND';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_SECTION_TITLES:
      return {
        ...state,
      };

    case RECEIVED_SECTION_TITLE:
      return {
        ...state,
        sectionTitles: action.data,
        titlesLoaded: true,
      };

    case LOAD_TOUR_DATES:
      return {
        ...state,
      };

    case RECEIVED_TOUR_DATES:
      return {
        ...state,
        loadedData: {
          ...state.loadedData,
          tourdates: true,
        },
        tourDates: cleanTourDates(action.data),
      };

    case LOAD_SECTION_DISCO:
      return {
        ...state,
      };

    case RECEIVED_SECTION_DISCO:
      return {
        ...state,
        sectionDisco: action.data,
      };

    case LOAD_SECTION_ABOUT:
      return {
        ...state,
      };

    case RECEIVED_SECTION_ABOUT:
      return {
        ...state,
        sectionAbout: action.data,
      };

    case LOAD_SECTION_ABOUT_DESCRIPTION:
      return {
        ...state,
      };

    case RECEIVED_SECTION_ABOUT_DESCRIPTION:
      return {
        ...state,
        sectionAboutDescription: action.data,
        aboutLoaded: true,
      };

    case LOAD_SECTION_BACKGROUND:
      return {
        ...state,
      };

    case RECEIVED_SECTION_BACKGROUND:
      return {
        ...state,
        sectionBackground: action.data,
        backgroundLoaded: true,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */

// Sections Import
export const loadSectionTitles = () => ({
  type: LOAD_SECTION_TITLES,
});

export const receivedSectionTitles = data => ({
  type: RECEIVED_SECTION_TITLE,
  data,
});

// Tour Import
export const loadTourDates = () => ({
  type: LOAD_TOUR_DATES,
});

export const receivedTourDates = data => ({
  type: RECEIVED_TOUR_DATES,
  data,
});

export const loadSectionDisco = () => ({
  type: LOAD_SECTION_DISCO,
});

export const receivedSectionDisco = data => ({
  type: RECEIVED_SECTION_DISCO,
  data,
});

export const loadSectionAbout = () => ({
  type: LOAD_SECTION_ABOUT,
});

export const receivedSectionAbout = data => ({
  type: RECEIVED_SECTION_ABOUT,
  data,
});

export const loadSectionAboutDescription = () => ({
  type: LOAD_SECTION_ABOUT_DESCRIPTION,
});

export const receivedSectionAboutDescription = data => ({
  type: RECEIVED_SECTION_ABOUT_DESCRIPTION,
  data,
});

export const loadSectionBackground = () => ({
  type: LOAD_SECTION_BACKGROUND,
});

export const receivedSectionBackground = data => ({
  type: RECEIVED_SECTION_BACKGROUND,
  data,
});

/**
 * Selectors
 */

// Bonus : getSlug pour le active menu

/**
 * Export
 */
export default reducer;
