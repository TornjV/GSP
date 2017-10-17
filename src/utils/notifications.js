import { Permissions, Notifications } from 'expo';
import { URL } from './API';
import { Alert } from 'react-native';
import { fetch } from '.';

const url = 'http://192.168.48.45:5000/Expo/Send';//'https://your-server.com/users/push-token';

export default {
  registerForPushNotificationsAsync: async function() {
    const { existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    alert(token);
    console.log(token);
    // POST the token to our backend so we can use it to send pushes from there
    // return fetch({
    //   url,
    //   method: 'GET',
    // });
  }
};
