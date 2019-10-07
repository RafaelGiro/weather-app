import { combineReducers } from 'redux';
import minMaxReducer from './minMaxReducer';

export default combineReducers({
  minMax: minMaxReducer,
});
