import { SET_MINIMUM, SET_MAXIMUM } from '../actions/types';

export default function(state = { minWeather: {}, maxWeather: {} }, action) {
  switch (action.type) {
    case SET_MINIMUM:
      return { ...state, minWeather: action.payload };
    case SET_MAXIMUM:
      return { ...state, maxWeather: action.payload };
    default:
      return state;
  }
}
