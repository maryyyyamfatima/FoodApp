import { StyleSheet, Image, View, Text } from 'react-native';
import PizzaBurger from '@/src/components/Pizzaburger';
import pizzaData from '@/assets/data/product';
import CustomNavBar from '@/src/components/CustomNavBar';
import React from 'react';

export default function TabOneScreen() {

  return (
    <View style={styles.container}>
      <CustomNavBar />
      <PizzaBurger myProps={pizzaData}/>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
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