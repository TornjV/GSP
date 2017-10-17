import { createAction, handleActions } from 'redux-actions';

import { API } from '../utils';

const PREFIX = 'departures';
const GET_DEPARTURES = `${PREFIX}/GET_DEPARTURES`;

const getDepartures = createAction(GET_DEPARTURES, API.getDepartures);

export const actions = {
  getDepartures,
}

const initialState = {
  departures: [],
}

export default handleActions({
  [getDepartures]: (state, { payload }) =>
    ({ ...state, departures: payload }),
}, initialState);
