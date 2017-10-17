import { createAction, handleActions } from 'redux-actions';

import { API } from '../utils';

const PREFIX = 'news';
const GET_NEWS = `${PREFIX}/GET_NEWS`;

const getNews = createAction(GET_NEWS, API.getNews);

export const actions = {
  getNews,
}

const initialState = {
  news: [],
}

export default handleActions({
  [getNews]: (state, { payload }) =>
    ({ ...state, news: payload }),
}, initialState);
