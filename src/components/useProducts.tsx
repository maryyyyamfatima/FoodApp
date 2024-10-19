import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useProducts = () => {
  const [apiData, setApiData] = useState([]); // Store API data
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fetch data from the APIIII
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://foodapi-zohaib.vercel.app/products');
      const result = await response.json();
      setApiData(result.docs); // Update with 'docs' part of the response
      await AsyncStorage.setItem('products', JSON.stringify(result.docs)); // Cache data offline
    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load cached data from AsyncStorage when offline
  const loadCachedData = async () => {
    try {
      const cachedData = await AsyncStorage.getItem('products');
      if (cachedData) {
        setApiData(JSON.parse(cachedData));
      }
    } catch (error) {
      console.error('Error loading cached data:', error);
    }
  };

  // Refresh data
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData().then(() => setRefreshing(false));
  }, []);

  // Add new product
  const addProduct = async (product: any) => {
    try {
      const response = await fetch('https://foodapi-zohaib.vercel.app/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      const result = await response.json();
      if (response.ok) {
        await fetchData(); // Refresh the list after posting a new product
        return result;
      } else {
        throw new Error(result.message || 'Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on mount
    loadCachedData(); // Load cached data if offline
  }, []);

  return {
    apiData,
    loading,
    refreshing,
    onRefresh,
    addProduct,
  };
};
