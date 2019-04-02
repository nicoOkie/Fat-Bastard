/**
 * Local imports
 */
import { cleanTourDates } from 'src/utils/tourCleaner';

/**
 * Initial State
 */
const initialState = {
  sectionTitles: [],
  sectionPictures: [],
  musicians: [],
  gallery: [],
  albums: [],
  tourDates: [],
  loadedData: {
    sectionTitles: false,
    tourdates: false,
    mediaPictures: false,
  },
};

/**
 * Types
 */
// Sections import
export const LOAD_SECTION_TITLES = 'LOAD_SECTION_TITLES';
export const RECEIVED_SECTION_TITLE = 'RECEIVED_SECTION_TITLE';
export const LOAD_SECTION_BG_PICTURES = 'LOAD_SECTION_BG_PICTURES';
export const RECEIVED_SECTION_BG_PICTURES = 'RECEIVED_SECTION_BG_PICTURES';
// Tour Import
export const LOAD_TOUR_DATES = 'LOAD_TOUR_DATES';
export const RECEIVED_TOUR_DATES = 'RECEIVED_TOUR_DATES';
// Media Import
export const LOAD_PICTURES = 'LOAD_PICTURES';
export const RECEIVED_PICTURES = 'RECEIVED_PICTURES';

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
        loadedData: {
          ...state.loadedData,
          sectionTitles: true,
        },
        sectionTitles: action.data,
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

    case LOAD_PICTURES:
      return {
        ...state,
      };

    case RECEIVED_PICTURES:
      return {
        ...state,
        loadedData: {
          ...state.loadedData,
          mediaPictures: true,
        },
        gallery: action.data,
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

export const loadSectionBgPictures = () => ({
  type: LOAD_SECTION_BG_PICTURES,
});

export const receivedSectionBgPictures = data => ({
  type: RECEIVED_SECTION_BG_PICTURES,
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

// Media Import
export const loadPictures = () => ({
  type: LOAD_PICTURES,
});

export const receivedPictures = data => ({
  type: RECEIVED_PICTURES,
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
