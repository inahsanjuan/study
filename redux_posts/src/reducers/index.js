import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import PostsReducer from './reducers_posts';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostsReducer,
  form: formReducer,
});

export default rootReducer;
