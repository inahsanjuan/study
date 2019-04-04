import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      /* ES5
      const post = action.payload.data;
      const newState = { ...state };

      newState[post.id] = post;*/

      // ES6 : key interpolation
      return {...state, [action.payload.data.id]: action.payload.data};
    case FETCH_POSTS:
      // action.payload.data  == [post1, post2]
      return _.mapKeys(action.payload.data, 'id'); // { 4: post }
    default:
      return state;
  }
}