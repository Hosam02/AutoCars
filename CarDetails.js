import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const CarDetailsScreen = ({ route, navigation }) => {
  const { car } = route.params;

  const handleChatPress = () => {
    // Navigate to the ChattingScreen 
    navigation.navigate('ChattingScreen');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{car.make}</Text>
      <Text style={styles.model}>{car.model}</Text>

      <View style={styles.slideContainer}>
        <ScrollView horizontal pagingEnabled>
          {car.pictures.map((picture, index) => (
            <Image key={index} source={{ uri: picture }} style={styles.picture} resizeMode="contain" />
          ))}
        </ScrollView>
      </View>

      <Text style={styles.price}>Price: ${car.price}</Text>

      <Text style={styles.subtitle}>Description:</Text>
      <Text style={styles.description}>{car.description}</Text>

      <View style={styles.sellerContactZone}>
        <Text style={styles.contactTitle}>Contact Seller:</Text>
        <Text style={styles.contactInfo}>Email: {car.sellerEmail}</Text>
        <Text style={styles.contactInfo}>Phone: {car.sellerPhone}</Text>
      </View>

      <TouchableOpacity style={styles.chatButton} onPress={handleChatPress}>
        <Text style={styles.chatButtonText}>Chat with Seller</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: 8,
  },
  model: {
    fontSize: 18,
    marginBottom: 16,
  },
  slideContainer: {
    height: 300,
    marginBottom: 16,
  },
  picture: {
    width: 300,
    height: 200,
    marginRight: 8,
  },
  price: {
    fontSize: 16,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
  sellerContactZone: {
    marginTop: 24,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 16,
    borderRadius: 4,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 4,
  },
  chatButton: {
    backgroundColor: '#1e90ff',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  chatButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default CarDetailsScreen;
