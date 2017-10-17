import { combineReducers } from 'redux';

import * as globalReducers from '../modules';
import Router, { initialState } from '../components/Router';

const navReducer = (state = initialState, action) => {
  const nextState = Router.router.getStateForAction(action, state);

  return nextState || state;
};

export default () =>
  combineReducers({
    nav: navReducer,
    ...globalReducers,
  });
