// import React from 'react';
// import {
//   Notifications,
// } from 'expo';
// import {
//   Text,
//   View,
// } from 'react-native';
//
// import OursNotifications from './notifications';
// // import registerForPushNotificationsAsync from 'registerForPushNotificationsAsync';
//
// export default class AppContainer extends React.Component {
//   state = {
//     notification: {},
//   };
//
//   constructor(){
//     super();
//     OursNotifications.registerForPushNotificationsAsync();
//     this._notificationSubscription = Notifications.addListener(this._handleNotification);
//
//   }
//
//   componentWillMount() {
//     // registerForPushNotificationsAsync();
//     // Handle notifications that are received or selected while the app
//     // is open. If the app was closed and then opened by tapping the
//     // notification (rather than just tapping the app icon to open it),
//     // this function will fire on the next tick after the app starts
//     // with the notification data.
//   }
//
//   _handleNotification = (notification) => {
//     this.setState({notification: notification});
//   };
//
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Origin: {this.state.notification.origin}</Text>
//         <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
//       </View>
//     );
//   }
// }
