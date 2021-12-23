import { combineReducers } from 'redux';

import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  profile: searchReducer,
});

export default rootReducer;
