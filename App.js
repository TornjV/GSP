import { ThemeProvider } from 'styled-components/native';
import React, { Component } from 'react';
import { connect, Provider as ReduxProvider } from 'react-redux';
import { Font, Notifications } from 'expo';

import { RightDrawer, BottomDrawer, Layout } from './src/components';
import { theme } from './src/utils';
import { actions as fontActions } from './src/modules/font';
import createStore from './src/store/createStore';
import OurNotifications from './src/utils/notifications';
import { Alert } from 'react-native';
// import AppContainer from './src/utils/notificationsHandler';

import {
  Text,
  View,
} from 'react-native';


const store = createStore();

class App extends Component {
  state = {
      notification: {},
    };
  componentDidMount = async () => {
    await Font.loadAsync({
      'Titillium': require('./src/assets/fonts/Titillium.ttf'),
    });

    this.props.fontLoaded(true);
  }
  componentWillMount(){
    OurNotifications.registerForPushNotificationsAsync();
    console.log("11111s");
    console.log(Notifications);
    console.log(this._handleNotification);
        this._notificationSubscription = Notifications.addListener(this._handleNotification);
        alert("registered");
  }
  _handleNotification = (notification) => {
    console.log("arrived");
    this.setState({notification: notification});
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <RightDrawer>
          <BottomDrawer>
            <Layout/>
          </BottomDrawer>
        </RightDrawer>
      </ThemeProvider>
    )
  }
}

const EApp = connect(
  state => ({ }),
  ({ ...fontActions }),
)(App);

const D = ({ children }) =>
  <ReduxProvider store={store}>
    <EApp />
  </ReduxProvider>;

export default D;
