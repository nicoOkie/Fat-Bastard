/**
 * Initial State
 */
const initialState = {
  sectionHeaders: [],
  musicians: [],
  galery: [],
  albums: [],
  status: '',
};

/**
 * Types
 */
export const LOAD_SECTION_HEADERS = 'LOAD_SECTION_HEADERS';
export const RECEIVED_SECTION_HEADERS = 'RECEIVED_SECTION_HEADERS';

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_SECTION_HEADERS:
      return {
        ...state,
        status: 'loading',
      };

    case RECEIVED_SECTION_HEADERS:
      return {
        ...state,
        sectionHeaders: action.data,
        status: 'loaded',
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const loadSectionHeaders = () => ({
  type: LOAD_SECTION_HEADERS,
});

export const receivedSectionHeaders = data => ({
  type: RECEIVED_SECTION_HEADERS,
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
