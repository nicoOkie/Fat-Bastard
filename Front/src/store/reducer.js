/**
 * Initial State
 */
const initialState = {
  sectionTitles: [],
  musicians: [],
  galery: [],
  albums: [],
  status: '',
};

/**
 * Types
 */
export const LOAD_SECTION_TITLES = 'LOAD_SECTION_TITLES';
export const RECEIVED_SECTION_TITLE = 'RECEIVED_SECTION_TITLE';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_SECTION_TITLES:
      return {
        ...state,
        status: 'loading',
      };

    case RECEIVED_SECTION_TITLE:
      return {
        ...state,
        sectionTitles: action.data,
        status: 'loaded',
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const loadSectionTitles = () => ({
  type: LOAD_SECTION_TITLES,
});

export const receivedSectionTitles = data => ({
  type: RECEIVED_SECTION_TITLE,
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
