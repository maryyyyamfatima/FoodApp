import {View, Text, Image, StyleSheet} from 'react-native'

const PizzaDetailScreen = () => {

    return (
        <View>
            <Text style={{fontSize:50}}> PizzaDetailScreen </Text>    
        </View>
    )
}

export default PizzaDetailScreen;

const styles = StyleSheet.create({
    image: {
      width: '100%',
      aspectRatio: 1,
      resizeMode:'contain'
    }
  });