const config = require('./config');
import { Base64 } from 'js-base64';

export function createSession(username, password) {
  return dispatch => {
    dispatch(createSessionBegin());
    console.log( Base64.encode(username + ':' + password));
    var request = new Request(`${config.qifphost}/qifp/session/`, {
      method: 'POST'
    });
    console.log(request);
    return fetch(request)
    .then(handleErrors)
    .then(res => {
      dispatch(createSessionSuccess(res));
      return res;
    })
    .catch(error => dispatch(createSessionFailure(error)));
  };
}

// Handle HTTP errors since fetch doesn't hadnle it
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const CREATE_SESSION_BEGIN   = 'CREATE_SESSION_BEGIN';
export const CREATE_SESSION_SUCCESS = 'CREATE_SESSION_SUCCESS';
export const CREATE_SESSION_FAILURE = 'CREATE_SESSION_FAILURE';

export const createSessionBegin = () => ({
  type: CREATE_SESSION_BEGIN
});

export const createSessionSuccess = token => ({
  type: CREATE_SESSION_SUCCESS,
  payload: { token }
});

export const createSessionFailure = error => ({
  type: CREATE_SESSION_FAILURE,
  payload: { error }
});