import { createAction, handleActions } from 'redux-actions';

import { API } from '../utils';

const PREFIX = 'lines';
const GET_LINES_LIST = `${PREFIX}/GET_LINES_LIST`;
const TOGGLE_SELECTED_LINE = `${PREFIX}/TOGGLE_SELECTED_LINE`;

const getLinesList = createAction(GET_LINES_LIST, API.getRoutes);

const toggleSelectedLine = createAction(TOGGLE_SELECTED_LINE);

export const actions = {
  getLinesList,
  toggleSelectedLine,
}

const initialState = {
  lines: [],
  activeLines: [],
}

export default handleActions({
  [getLinesList]: (state, { payload }) =>
    ({ ...state, lines: payload }),
  [toggleSelectedLine]: (state, { payload }) => {
    const activeLines = state.lines.map(line => {
      const activeLine = state.activeLines.find(curr => curr.id === line.id) || {};

      if (line.id === payload) {
        return ({ id: line.id, active: !activeLine.active });
      }

      return ({ id: line.id, active: activeLine.active || false });
    });

    return ({ ...state, activeLines });
  }
}, initialState);
