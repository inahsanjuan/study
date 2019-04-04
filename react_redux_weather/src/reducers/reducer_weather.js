import { FETCH_WEATHER } from '../actions/index';

// used to store data fetched from the *weather api*
export default function (state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    // returning a new version of our state, not 'mutating'
    return [ action.payload.data, ...state ]; //state.concat([action.payload.data]);
  }

  return state;
}
