import { createStore, combineReducers } from 'redux';
import INITIAL_STATE from '../constants/initialState';
import houseReducer from './houseReducer';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import detailsReducer from './detailsReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  data: houseReducer,
  details: detailsReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
