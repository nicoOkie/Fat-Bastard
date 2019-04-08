import axios from 'axios';


// Import
import { LOAD_PLAYER_V2, receivedPlayerV2 } from 'src/store/reducer';

const playerV2Middleware = store => next => (action) => {
  switch (action.type) {
    case LOAD_PLAYER_V2:
      axios
        .get('http://92.243.8.90/fat/back/wp-json/wp/v2/player')
        .then(({ data }) => {
          store.dispatch(receivedPlayerV2(data));
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

export default playerV2Middleware;
