import Axios from 'axios';
import Swal from 'sweetalert2';

// ========================== Global Axios Calls ==============================

// ========================== Custom Axios Calls ==============================

// -------------------------- Aura API ---------------------------------

/**
 * Various endpoints to call in our backend depending on environment
 * @param {} environment NODE Environment String
 */
const endpoint = environment => {
  switch (environment) {
    case 'development':
      return 'https://aurelia-server-staging.herokuapp.com/api/';
    case 'test':
      return 'https://aurelia-server-staging.herokuapp.com/api/';
    case 'production':
      return 'https://aurelia-server.herokuapp.com/api/';
    default:
      return 'http://localhost:3500/api/';
  }
};

// Headers required to make calls to the backend
const headers = {
  // Authorization: 'bearer <token>'
};

const instance = Axios.create({
  // FIXME: Figure out a way to make calls to different servers based on the .env
  // TODO: Change this endpoint based on the environment you are using.
  baseURL: endpoint(process.env.NODE_ENV),
  timeout: 10000,
  headers,
  params: {},
});

export default instance;

// ========================== Error Handling ==============================

export const alertErrorHandler = error => {
  if (error.response) {
    // Any valid / expected errors due to client error
    Swal.fire({
      type: 'error',
      text: `${error.response.status}: ${error.response.data.message}`,
    });
  } else if (error.request) {
    // The request was made but no response was received
    Swal.fire({
      type: 'error',
      text: `The request you made was not sent properly, our our server is not responding. Please try again later.`,
    });
  } else {
    // Something went very wrong
    Swal.fire({
      type: 'error',
      text: `Something is wrong with our system. Please try again later.`,
    });
  }
};
