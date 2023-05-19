import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const SellCarScreen = () => {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    pictures: '',
    description: '',
  });

  const handleInputChange = (key, value) => {
    setCarData({ ...carData, [key]: value });
  };

  const handleSubmit = async () => {
    // Validate the form inputs
    if (carData.make === '' || carData.model === '' || carData.year === '' || carData.price === '') {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // Prepare the car object to be added to the database
    const car = {
      make: carData.make,
      model: carData.model,
      year: carData.year,
      price: carData.price,
      pictures: carData.pictures,
      description: carData.description,
    };

    try {
      // Make the API call to add the car to the database
      const response = await fetch('http://localhost:3000/cars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(car),
      });

      // Handle the API response
      if (response.ok) {
        // Show a success message
        Alert.alert('Success', 'Thank you for adding the car!');

        // Reset the form
        setCarData({
          make: '',
          model: '',
          year: '',
          price: '',
          pictures: '',
          description: '',
        });
      } else {
        // Show an error message
        Alert.alert('Error', 'Failed to add the car. Please try again.');
      }
    } catch (error) {
      // Handle any network or server errors
      Alert.alert('Error', 'An error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sell Your Car</Text>

      <TextInput
        style={styles.input}
        placeholder="Make"
        value={carData.make}
        onChangeText={(value) => handleInputChange('make', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Model"
        value={carData.model}
        onChangeText={(value) => handleInputChange('model', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Year"
        keyboardType="numeric"
        value={carData.year}
        onChangeText={(value) => handleInputChange('year', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={carData.price}
        onChangeText={(value) => handleInputChange('price', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Pictures (separated by commas)"
        value={carData.pictures}
        onChangeText={(value) => handleInputChange('pictures', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Description"
        multiline
        value={carData.description}
        onChangeText={(value) => handleInputChange('description', value)}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
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
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: 'blue',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SellCarScreen;
