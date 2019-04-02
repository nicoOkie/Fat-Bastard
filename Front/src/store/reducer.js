/**
 * Initial State
 */
const initialState = {
  sectionTitles: [],
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
export const LOAD_SECTION_TITLES = 'LOAD_SECTION_TITLES';
export const RECEIVED_SECTION_TITLE = 'RECEIVED_SECTION_TITLE';
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

export const loadSectionTitles = () => ({
  type: LOAD_SECTION_TITLES,
});

export const receivedSectionTitles = data => ({
  type: RECEIVED_SECTION_TITLE,
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
