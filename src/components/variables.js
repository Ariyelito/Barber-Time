import { MAIN_BACK_GROUND_COLOR, MAIN_TEXT_COLOR } from "./Colors";
import { PermissionsAndroid } from 'react-native';
import {Notifications} from 'react-native-notifications';

export const containerStyle = {
    alignItems: "center",
    backgroundColor:MAIN_BACK_GROUND_COLOR,
    flex:1,
};
export const mainTextStyle = {
    fontSize:22,
    fontWeight:'bold',
    color:MAIN_TEXT_COLOR,
}
export async function requestLocationPermission() 
{
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        'title': 'Barber-time',
        'message': 'Barber-time access to your location '
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the location")
    
    } else {
      console.log("location permission denied")
      alert("Location permission denied");
    }
  } catch (err) {
    console.warn(err)
  }
}

export const notify = (title , body) =>{
  Notifications.setNotificationChannel({
    channelId: 'my-channeltest',
    name: 'My Channeltest',
    importance: 5,
    description: 'My Description',
    enableLights: true,
    enableVibration: true,
   
    showBadge: true,
    vibrationPattern: [200, 1000, 500, 1000, 500],
})



  Notifications.registerRemoteNotifications();

  Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
    console.log(`Notification received in foreground: ${notification.title} : ${notification.body}`);
    completion({alert: false, sound: false, badge: false});
  });

  Notifications.events().registerNotificationOpened((notification, completion) => {
    console.log(`Notification opened: ${notification.payload}`);
    completion();
  });

  Notifications.postLocalNotification({
    title: title,
    body: body,
    extra: "data",
    channelId:'my-channeltest' ,
});
};