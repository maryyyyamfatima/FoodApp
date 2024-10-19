import {View, Text, Image, StyleSheet, Pressable, Button} from 'react-native'


    const GoToAddToCart = () =>{
    
    return (
       <View> 
        <Text>Ad To Cart</Text>
       </View>
    )
}

export default GoToAddToCart;

const styles = StyleSheet.create({
    container:{
        flex:1,
        // alignItems:'center',
        // justifyContent:'center',
    },
    textS:{
        color:'white',
        fontSize:24
    },
    pizzacontainer:{
        flex:0.60,
        backgroundColor:'grey'
    },
    size:{
        flex:0.40,
        backgroundColor:'lightgrey',
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    sizes:{
        width:50,
        height:50,
        borderRadius:25,
        // backgroundColor:'red',
        // flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode:'contain'
    }
  });