import { createStore, combineReducers } from 'redux';
import INITIAL_STATE from '../constants/initialState';
import houseReducer from './houseReducer';
import profileReducer from './profileReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  data: houseReducer,
  current_user: profileReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
