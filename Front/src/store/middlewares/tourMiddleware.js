// NPM
import axios from 'axios';


// Import
import { LOAD_TOUR_DATES, receivedTourDates } from 'src/store/reducer';

const apiURL = 'http://92.243.8.90/fat/back/wp-json';


const tourMiddleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_TOUR_DATES:
      axios
        .get(`${apiURL}/wp/v2/tourdates`)
        .then(({ data }) => {
          store.dispatch(receivedTourDates(data));
        })
        .catch(error => (
          console.log(error)
        ));
      break;

    default:
      break;
  }

  // Passe à ton voisin
  next(action);
};

export default tourMiddleware;
