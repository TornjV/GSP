import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Home, Schedule, News, Contact } from '../pages';

const Router = StackNavigator({
  Home: { screen: Home },
  Schedule: { screen: Schedule },
  News: { screen: News },
  Contact: { screen: Contact },
}, {
  headerMode: 'none',
  cardStyle: {
    shadowColor: 'transparent',
  },
  navigationOptions: {
    header: {
      style: {
        elevation: 0,
        shadowOpacity: 0,
      }
    }
  }
});

export const initialState = Router.router.getStateForAction(Router.router.getActionForPathAndParams('Home'));

export default Router;
