// npm
import axios from 'axios';

// Import

// - - - Importer les actions du reducer
import { LOAD_SECTION_BACKGROUND, receivedSectionBackground } from 'src/store/reducer';


const middlewareSectionBackground = store => next => (action) => {
  switch (action.type) {
    case LOAD_SECTION_BACKGROUND:
      axios
        .get('http://92.243.8.90/fat/back/wp-json/fat/v1/customizer/section/photos')
        .then(({ data }) => {
          store.dispatch(receivedSectionBackground(data));
        })
        .catch(() => (
          console.log('Hoooooooooo !')
        ));
      break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default middlewareSectionBackground;
