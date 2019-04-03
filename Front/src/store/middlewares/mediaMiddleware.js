// npm
import axios from 'axios';

// Import

// - - - Importer les actions du reducer
import { LOAD_PICTURES, receivedPictures } from 'src/store/reducer';

const apiURL = 'http://92.243.8.90/fat/back/wp-json';


const mediaMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_PICTURES:
      axios
        .get(`${apiURL}/fat/v1/customizer/medias/photos`)
        .then(({ data }) => {
          store.dispatch(receivedPictures(data));
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

export default mediaMiddleware;
