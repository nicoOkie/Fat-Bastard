// NPM
import axios from 'axios';


// Import
import { LOAD_NEWS, receivedNews } from 'src/store/reducer';

const apiURL = 'http://92.243.8.90/fat/back/wp-json';


const tourMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_NEWS:
      axios
        .get(`${apiURL}/wp/v2/posts`)
        .then(({ data }) => {
          store.dispatch(receivedNews(data));
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
