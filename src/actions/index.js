import { SET_MINIMUM, SET_MAXIMUM } from './types';

// Set the lowest temperature seen used on the MinMaxPage
export const setMinTemp = weather => dispatch => {
  dispatch({ type: SET_MINIMUM, payload: weather });
};

// Set the highest temperature seen used on the MinMaxPage
export const setMaxTemp = weather => dispatch => {
  dispatch({ type: SET_MAXIMUM, payload: weather });
};
