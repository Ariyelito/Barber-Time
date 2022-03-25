import { MAIN_BACK_GROUND_COLOR, MAIN_TEXT_COLOR } from "./colors";
import { PermissionsAndroid } from 'react-native';
export const containerStyle = {
    alignItems: "center",
    backgroundColor:MAIN_BACK_GROUND_COLOR,
    flex:1,
};
export const mainTextStyle = {
    fontSize:25,
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