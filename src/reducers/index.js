import { createStore, combineReducers } from 'redux';
import INITIAL_STATE from '../constants/initialState';
import houseReducer from './houseReducer';
// import loginReducer from './loginReducer';
// import signupReducer from './signupReducer';
import detailsReducer from './detailsReducer';
import profileReducer from './profileReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  // login: loginReducer,
  // signup: signupReducer,
  auth: authReducer,
  data: houseReducer,
  details: detailsReducer,
  current_user: profileReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
