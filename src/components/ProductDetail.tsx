// import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
// import React, { useState } from 'react';
// import { useLocalSearchParams } from 'expo-router';
// import pizzaData from '@/assets/data/product'; // Assuming this imports the correct data

// const sizes = ['S', 'M', 'L', 'XL'];

// const ProductDetail = () => {
//     // Destructure id from URL parameters using expo-router
//     const { id } = useLocalSearchParams();

//     // Check if id is being retrieved correctly
//     console.log('Received id:', id);

//     // Find the product in the data array based on the id
//     const product = pizzaData.find((p) => p.id.toString() === id);
    
//     // Debugging statement to check the retrieved product
//     console.log('Found product:', product);

//     const [sizeOfPizza, setSizeOfPizza] = useState('M');

//     // If the product is not found, show an error message
//     if (!product) {
//         return (
//             <View style={styles.container}>
//                 <Text>Product not found!</Text>
//             </View>
//         );
//     }

//     // Render the product details when found
//     return (
//         <View style={styles.container}>
//             {/* Product Image */}
//             <Image
//                 source={{ uri: product.image }}
//                 style={styles.image}
//             />
            
//             {/* Product Name */}
//             <Text style={styles.title}>Product: {product.name}</Text>

//             {/* Size Selector */}
//             <View style={styles.size}>
//                 {sizes.map((data) => (
//                     <Pressable
//                         key={data} // Ensure each size button has a unique key
//                         onPress={() => { setSizeOfPizza(data); }} // Update selected size
//                         style={[styles.innersize, { backgroundColor: sizeOfPizza === data ? 'grey' : 'lightgrey' }]}
//                     >
//                         <Text>{data}</Text>
//                     </Pressable>
//                 ))}
//             </View>
//         </View>
//     );
// };

// export default ProductDetail;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#fff',
//     },
//     image: {
//         width: '100%',
//         aspectRatio: 1,
//         resizeMode: 'contain',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginVertical: 10,
//         textAlign: 'center',
//     },
//     size: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginVertical: 20,
//     },
//     innersize: {
//         backgroundColor: 'lightgrey',
//         aspectRatio: 1,
//         width: 50,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
