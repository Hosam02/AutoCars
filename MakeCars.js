import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const MakeCarsScreen = ({ route, navigation }) => {
  const { make } = route.params;
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch the cars for the selected make
    fetch(`http://localhost:3000/cars?make=${make}`)
      .then((response) => response.json())
      .then((data) => setCars(data))
      .catch((error) => console.error('Error fetching cars:', error));
  }, [make]);

  const handleCarPress = (car) => {
    // Navigate to the CarDetails screen with the selected car
    navigation.navigate('CarDetails', { car });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Cars for ${make}`}</Text>

      {cars.length > 0 ? (
        <FlatList
          data={cars}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleCarPress(item)} style={styles.carItem}>
              <Text style={styles.carMake}>{item.make}</Text>
              <Text style={styles.carModel}>{item.model}</Text>
              <Text style={styles.carYear}>{item.year}</Text>
              <Text style={styles.carPrice}>{`$${item.price}`}</Text>
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={styles.noCars}>No cars available for this make</Text>
      )}
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
  carItem: {
    marginBottom: 16,
  },
  carMake: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carModel: {
    fontSize: 16,
    marginBottom: 4,
  },
  carYear: {
    fontSize: 16,
    marginBottom: 4,
  },
  carPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  noCars: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default MakeCarsScreen;
