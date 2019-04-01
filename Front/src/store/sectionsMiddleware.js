// npm
import axios from 'axios';

// Import

// - - - Importer les actions du reducer
import { LOAD_SECTION_HEADERS, receivedSectionHeaders } from 'src/store/reducer';

const apiURL = 'http://92.243.8.90/fat/back/wp-json';


const sectionMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_SECTION_HEADERS:
      axios
        .get(`${apiURL}/fat/v1/customizer`)
        .then(({ data }) => {
          store.dispatch(receivedSectionHeaders(data));
          console.log(data);
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
