// NPM
import axios from 'axios';


// Import
import { LOAD_VIDEOS, receivedVideos } from 'src/store/reducer';

const apiURL = 'http://92.243.8.90/fat/back/wp-json';


const tourMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_VIDEOS:
      axios
        .get(`${apiURL}/fat/v1/customizer/medias/videos`)
        .then(({ data }) => {
          store.dispatch(receivedVideos(data));
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

export default tourMiddleware;
