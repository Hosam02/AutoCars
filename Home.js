import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput,Keyboard  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const carMakes = [
    { name: 'Toyota', icon: require('./assets/Toyota_EU.svg.png') },
    { name: 'Honda', icon: require('./assets/1024px-Honda.svg.png') },
    { name: 'Ford', icon: require('./assets/clipart-2016040656.png') },
    { name: 'Chevrolet', icon: require('./assets/Chervolet.png') },
  ];
  const navigation = useNavigation();

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  const checkLoggedInStatus = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      setIsLoggedIn(!!token);
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  const handleCarMakePress = (index) => {
    // Navigate to the search results page for the selected car make
    navigation.navigate('MakeCars', { make: carMakes[index].name });
  };

  const handleSearch = (query) => {
    if (query.length >= 60 ||  Keyboard.didPressOK()) {
      // Navigate to the search results page with the search query
      navigation.navigate('SearchResults', { query });
    }
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

  const handleProfile = () => {
    if (isLoggedIn === true) {
      // Navigate to the profile screen
      navigation.navigate('ProfileScreen');
    } else {
      // Navigate to the login screen
      navigation.navigate('LoginScreen');
    }
  };

  const handleLogout = async () => {
    try {
      // Clear the token from AsyncStorage
      await AsyncStorage.removeItem('token');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AutoCars</Text>

      {isLoggedIn ? (
        <TouchableOpacity style={styles.profileButton} onPress={handleProfile}>
          <Ionicons name="person" size={32} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.loginButton} onPress={handleProfile}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      )}

      {isLoggedIn && (
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      )}

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

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('SearchScreen')}>
          <Text style={styles.navButtonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sellCarButton} onPress={handleSellCar}>
          {/* Sell car icon */}
          <Ionicons name="ios-add" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('FavoritesScreen')}>
          <Text style={styles.navButtonText}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('ProfileScreen')}>
          <Text style={styles.navButtonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 8,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileButton: {
    position: 'absolute',
    top: 16,
    right: 72,
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'red',
    borderRadius: 50,
    width: 64,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
  logoutText: {
    color: 'white',
    fontSize: 12,
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
    marginBottom: 16,
  },
  carMakeLogo: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    marginBottom: 16,
  },
  carMakeIcon: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  carMakeText: {
    fontSize: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 56,
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  sellCarButton: {
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});

export default HomeScreen;
