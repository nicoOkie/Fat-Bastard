// npm
import axios from 'axios';

// Import

// - - - Importer les actions du reducer
import {
  LOAD_SECTION_DISCO,
  receivedSectionDisco,
  LOAD_DISCO_PICS,
  receivedDiscoPics,
} from 'src/store/reducer';

const middlewareDisco = store => next => (action) => {
  switch (action.type) {
    case LOAD_SECTION_DISCO:
      axios
        .get('http://92.243.8.90/fat/back/wp-json/wp/v2/discography')
        .then(({ data }) => {
          store.dispatch(receivedSectionDisco(data));
        })
        .catch(() => (
          console.log('Hoooooooooo !')
        ));
      break;

    case LOAD_DISCO_PICS:
      axios
        .get('http://92.243.8.90/fat/back/wp-json/fat/v1/discography/recto')
        .then(({ data }) => {
          store.dispatch(receivedDiscoPics(data));
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

export default middlewareDisco;
