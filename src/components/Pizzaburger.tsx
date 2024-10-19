import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  RefreshControl,
  Button,
  TextInput,
  Alert
} from 'react-native';
import { Link } from 'expo-router';
import { Product } from '@/assets/data/types';
import { useState } from 'react';
import { useProducts } from './useProducts'; // Import the custom hook
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import FastImage from 'react-native-fast-image';
import { Image } from 'expo-image'; //NOW USING THIS INSTEAD OF UPAR WALA

type ProductListItemProps = {
  product: Product;
};

const Item = ({ product }: ProductListItemProps) => (
  <Link href={`/NewScreen?id=${product.id}`} asChild>
    <Pressable style={styles.renderitem}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image || '' }} // Handling possible null values
          style={styles.image}
          contentFit="cover" // Use contentFit for resize mode
        />
      </View>
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
  </Link>
);

export default function PizzaBurger({ myProps }: any) {
  const { apiData, refreshing, onRefresh, addProduct } = useProducts(); // Use the hook
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [available, setAvailable] = useState(true);

  const handleAddProduct = async () => {
    const newProduct = {
      title,
      price: parseFloat(price),
      image,
      description,
      available,
    };

    try {
      await addProduct(newProduct); // Call the addProduct function from the hook

      // Store the new product in AsyncStorage
      const existingProducts = await AsyncStorage.getItem('products');
      const updatedProducts = existingProducts ? JSON.parse(existingProducts) : [];
      updatedProducts.push(newProduct);
      await AsyncStorage.setItem('products', JSON.stringify(updatedProducts));

      Alert.alert('Success wohoooooooooooo', 'Product added successfully!');
      setTitle('');
      setPrice('');
      setImage('');
      setDescription('');
      setAvailable(true);
    } catch (error) {
      Alert.alert('Error', 'Failed to add product.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={myProps}
        renderItem={({ item }) => <Item product={item} />}
        keyExtractor={(item) => item.id.toString()} // Ensure id is a string
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={
          <View>
            <Text>API Data</Text>
            <FlatList
              data={apiData}
              renderItem={({ item }) => <Item product={item} />}
              //keyExtractor={(item) => item._id} // Using _id from API data
              numColumns={2}
              contentContainerStyle={{ gap: 10, padding: 10 }}
              columnWrapperStyle={{ gap: 10 }}
            />

            <Text style={styles.header}>Add New Product:</Text>
            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              style={styles.input}
              placeholder="Price"
              keyboardType="numeric"
              value={price}
              onChangeText={setPrice}
            />
            <TextInput
              style={styles.input}
              placeholder="Image URL"
              value={image}
              onChangeText={setImage}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
            />
            <Button title="Add Product" onPress={handleAddProduct} />
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    flex: 1,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 100,
    width: 150,
    height: 150,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 5,
  },
  renderitem: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
