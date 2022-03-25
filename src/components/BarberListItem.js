import React from 'react';
import { View, Text ,  StyleSheet , TouchableOpacity } from 'react-native';
import { containerStyle } from '../components/variables';


 const BarberListItem = ({ navigation , name ,adress , onPress }) => {


 
  return (
    <View >
       <TouchableOpacity style={styles.container}  onPress={()=>onPress()}>
           <Text style={styles.name}>
                {name}
           </Text>
           <Text style={styles.adress}>
                {adress}
           </Text>
       </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...containerStyle ,
    alignItems :'flex-start',
    
    paddingHorizontal:10,
    marginVertical:10,
    paddingVertical:10,
    elevation:7,
    borderBottomWidth:1,
  } , 
  name :{
    fontSize:30,
  }, 
  adress:{
    fontSize:20,
  },
  
})

export default BarberListItem;

