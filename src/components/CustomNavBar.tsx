import React, { useState } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For cart icon

export default function CustomNavBar() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState('Meals');

  return (
    <View style={styles.navContainer}>
      {/* Top Section: Our Menu in Center and Cart Icon on Right */}
      <View style={styles.headerContainer}>
        {/* Empty view for left space alignment */}
        <View style={styles.emptySpace} />

        {/* Centered Our Menu */}
        <Text style={styles.menuText}>Our Menu</Text>

        {/* Cart Icon */}
        <Ionicons name="cart-outline" size={24} color="black" style={styles.cartIcon} />
      </View>

      {/* Navigation Tabs */}
      <View style={styles.container}>
        {/* Meals Tab */}
        <Pressable 
          style={[styles.navItem, activeTab === 'Meals' && styles.activeNavItem]}
          onPress={() => setActiveTab('Meals')}
        >
          <Text style={[styles.navText, activeTab === 'Meals' && styles.activeNavText]}>
            Meals
          </Text>
        </Pressable>

        {/* Sides Tab */}
        <Pressable 
          style={[styles.navItem, activeTab === 'Sides' && styles.activeNavItem]}
          onPress={() => setActiveTab('Sides')}
        >
          <Text style={[styles.navText, activeTab === 'Sides' && styles.activeNavText]}>
            Sides
          </Text>
        </Pressable>

        {/* Snacks Tab */}
        <Pressable 
          style={[styles.navItem, activeTab === 'Snacks' && styles.activeNavItem]}
          onPress={() => setActiveTab('Snacks')}
        >
          <Text style={[styles.navText, activeTab === 'Snacks' && styles.activeNavText]}>
            Snacks
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: 'lightgrey',
    padding: 10,
    marginTop: 80,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20, // Space between header and nav tabs
  },
  emptySpace: {
    flex: 1, // Empty view to push the title to the center
  },
  menuText: {
    flex: 2,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  cartIcon: {
    flex: 1,
    textAlign: 'right', // Align the cart icon to the right
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  navText: {
    fontSize: 16,
    color: 'black',
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
  },
  activeNavText: {
    fontWeight: 'bold',
    color: 'orange',
  },
});
