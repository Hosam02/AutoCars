import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const carMakes = [
    { name: 'Toyota', icon: require('./assets/Toyota_EU.svg.png') },
    { name: 'Honda', icon: require('./assets/1024px-Honda.svg.png') },
    { name: 'Ford', icon: require('./assets/clipart-2016040656.png') },
    { name: 'Chevrolet', icon: require('./assets/chevrolet.svg') },
  ]; // Replace with your car makes and icon paths from the database
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with your login state logic

  const handleCarMakePress = (index) => {
    // Navigate to the search results page for the selected car make
    navigation.navigate('MakeCars', { make: carMakes[index].name });
  };

  const handleSearch = (query) => {
    // Navigate to the search results page with the search query
    navigation.navigate('SearchResults', { query });
  };

  const handleSellCar = () => {
    if (isLoggedIn === true) {
      // Navigate to the sell car page
      navigation.navigate('SellCar');
    } else {
      // Navigate to the login page
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Car App</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={handleSearch}
      />

      <Text style={styles.subtitle}>Popular Car Makes:</Text>

      <View style={styles.carMakeContainer}>
        {carMakes.map((make, index) => (
          <TouchableOpacity
            key={index}
            style={styles.carMakeLogo}
            onPress={() => handleCarMakePress(index)}
          >
            {/* Icon image */}
            <Image source={make.icon} style={styles.carMakeIcon} />

            <Text style={styles.carMakeText}>{make.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.sellCarButton} onPress={handleSellCar}>
        {/* Sell car icon */}
        <Ionicons name="ios-add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  carMakeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  carMakeLogo: {
    width: '50%',
    alignItems: 'center',
    marginBottom: 8,
  },
  carMakeIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  carMakeText: {
    fontSize: 16,
  },
  sellCarButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
