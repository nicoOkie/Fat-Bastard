// NPM
import axios from 'axios';


// Import
import { LOAD_PLAYER_V1, receivedPlayerV1 } from 'src/store/reducer';

const playerV1Middleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_PLAYER_V1:
      axios
        .get('http://92.243.8.90/fat/back/wp-json/fat/v1/player')
        .then(({ data }) => {
          store.dispatch(receivedPlayerV1(data));
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

export default playerV1Middleware;
