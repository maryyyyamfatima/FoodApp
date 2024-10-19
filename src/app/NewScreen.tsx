import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import pizzaData from '@/assets/data/product';
import { Product, PizzaSize } from '@/assets/data/types'; // Import types

const sizes: PizzaSize[] = ['S', 'M', 'L', 'XL']; // Use PizzaSize type for sizes

const NewScreen = () => {
  const { id } = useLocalSearchParams();
  const product = pizzaData.find((p) => p.id.toString() === id) as unknown as Product; // Use Product type

  const [sizeOfPizza, setSizeOfPizza] = useState<PizzaSize>('M'); // Use PizzaSize type
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<Product[]>([]); // Use Product type for cart items

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found!</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    const newCart = [...cart];
    for (let i = 0; i < quantity; i++) {
      newCart.push(product);
    }
    setCart(newCart);
    console.log('Cart updated:', newCart);
    console.log('Total quantity in cart:', newCart.length); // Log the total quantity in cart
  };

  return (
    <View style={styles.container}>
      <Text style={styles.idHeading}>Product ID: {product.id}</Text>

      <Image source={{ uri: product.image || '' }} style={styles.circularImage} />
      <View style={styles.centeredTextContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
      </View>

      <View style={styles.size}>
        {sizes.map((data) => (
          <Pressable
            key={data}
            onPress={() => setSizeOfPizza(data)}
            style={[
              styles.innersize,
              { backgroundColor: sizeOfPizza === data ? 'lightblue' : 'lightgrey' },
            ]}
          >
            <Text>{data}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.counterContainer}>
        <Pressable onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} style={styles.counterButton}>
          <Text>-</Text>
        </Pressable>
        <Text style={styles.counterText}>{quantity}</Text>
        <Pressable onPress={() => setQuantity(quantity + 1)} style={styles.counterButton}>
          <Text>+</Text>
        </Pressable>
      </View>

      <Pressable onPress={handleAddToCart} style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </Pressable>

      <Text style={styles.cartText}>Items in Cart: {cart.length}</Text>
    </View>
  );
};

export default NewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  idHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  circularImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
  },
  centeredTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 20,
    color: 'green',
  },
  size: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  innersize: {
    backgroundColor: 'lightgrey',
    aspectRatio: 1,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  counterButton: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
  },
  counterText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  addToCartButton: {
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  addToCartText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cartText: {
    marginTop: 20,
    fontSize: 18,
  },
});
