import { fetch } from '.';
export const URL = 'http://192.168.48.45:5000'

export default {

  getRoutes: () => {
    const url = `${URL}/route`;

    return fetch({
      url,
    });
  },

  getDepartures: () => {
    const url = `${URL}/departure`;

    return fetch({
      url,
    });
  },

  getNews: () => {
    const url = `${URL}/news`;

    return fetch({
      url,
    });
  },
};
