import { createStore, combineReducers } from 'redux';
import INITIAL_STATE from '../constants/initialState';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
