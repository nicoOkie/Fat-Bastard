// npm
import axios from 'axios';

// Import

// - - - Importer les actions du reducer
import { LOAD_SECTION_ABOUT_DESCRIPTION, receivedSectionAboutDescription } from 'src/store/reducer';

const middlewareAboutDescription = store => next => (action) => {
  switch (action.type) {
    case LOAD_SECTION_ABOUT_DESCRIPTION:
      axios
        .get('http://92.243.8.90/fat/back/wp-json/wp/v2/group/72')
        .then(({ data }) => {
          store.dispatch(receivedSectionAboutDescription(data));
        })
        .catch(() => (
          console.log('Hoooooooooo nop !')
        ));
      break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default middlewareAboutDescription;
