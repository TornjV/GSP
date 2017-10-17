import { createAction, handleActions } from 'redux-actions';

const PREFIX = 'drawer';
const TOGGLE_RIGHT_DRAWER = `${PREFIX}/TOGGLE_RIGHT_DRAWER`;
const TOGGLE_BOTTOM_DRAWER = `${PREFIX}/TOGGLE_BOTTOM_DRAWER`;

const toggleRightDrawer = createAction(TOGGLE_RIGHT_DRAWER);
const toggleBottomDrawer = createAction(TOGGLE_BOTTOM_DRAWER);

export const actions = {
  toggleRightDrawer,
  toggleBottomDrawer,
}

const initialState = {
  isRightOpen: false,
  isBottomOpen: false,
};

export default handleActions({
  [toggleRightDrawer]: (state, { payload }) => ({ ...state, isRightOpen: payload }),
  [toggleBottomDrawer]: (state, { payload }) => ({ ...state, isBottomOpen: payload }),
}, initialState);
