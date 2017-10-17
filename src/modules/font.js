import { createAction, handleActions } from 'redux-actions';

const PREFIX = 'font';
const FONT_LOADED = `${PREFIX}/FONT_LOADED`;

const fontLoaded = createAction(FONT_LOADED);

export const actions = {
  fontLoaded,
}

const initialState = {
  isFontLoaded: false,
};

export default handleActions({
  [fontLoaded]: (state, { payload }) => ({ ...state, isFontLoaded: payload }),
}, initialState);
