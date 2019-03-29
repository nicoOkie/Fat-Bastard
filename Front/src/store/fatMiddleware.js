// Middleware ajax : traitement des recup de données (recettes)

// npm
import axios from 'axios';

// Import

const apiURL = 'http://92.243.8.90/fat/back/wp-json/wp/v2/';


const fatMiddleware = store => next => (action) => {

  // Passe à ton voisin
  next(action);
};

export default fatMiddleware;
