import { StyleSheet, Image, View, Text, ScrollView } from 'react-native';

export default function TopBarScreen() {

  return (
    <View style={styles.container}>
        
        <View style={{backgroundColor:'red'}}>
        <Text> Meals </Text>
        </View>
        
        <View style={{backgroundColor:'green'}}>
        <Text> Sides </Text>

        </View>
        <View style={{backgroundColor:'blue'}}>
        <Text> Snacks </Text>

        </View>


    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 0.05,
  flexDirection:'row',
//   alignItems: 'center',
  justifyContent: 'space-between',
},
image:{
  width:'100%', 
  aspectRatio:2/1,
},
name:{
fontSize:42
},
title:{
  fontSize:50
}
});