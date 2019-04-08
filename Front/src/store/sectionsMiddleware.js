// npm
import axios from 'axios';

// Import

// - - - Importer les actions du reducer
import { LOAD_SECTION_TITLES, receivedSectionTitles } from 'src/store/reducer';

const apiURL = 'http://92.243.8.90/fat/back/wp-json';


const sectionMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_SECTION_TITLES:
      axios
        .get(`${apiURL}/fat/v1/customizer/section/titles`)
        .then(({ data }) => {
          store.dispatch(receivedSectionTitles(data));
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

export default sectionMiddleware;
