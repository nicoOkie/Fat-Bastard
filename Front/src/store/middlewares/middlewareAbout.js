// npm
import axios from 'axios';

// Import

// - - - Importer les actions du reducer
import { LOAD_SECTION_ABOUT, receivedSectionAbout } from 'src/store/reducer';

const middlewareAbout = store => next => (action) => {
  switch (action.type) {
    case LOAD_SECTION_ABOUT:
      axios
        .get('http://92.243.8.90/fat/back/wp-json/wp/v2/group')
        .then(({ data }) => {
          store.dispatch(receivedSectionAbout(data));
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

export default middlewareAbout;
