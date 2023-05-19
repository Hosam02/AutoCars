import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";

function InformationVoiture(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.marqueRow}>
        <Text style={styles.marque}>Marque</Text>
        <View style={styles.rect1}></View>
      </View>
      <View style={styles.typeRow}>
        <Text style={styles.type}>Type</Text>
        <View style={styles.rect2}></View>
      </View>
      <View style={styles.modeleRow}>
        <Text style={styles.modele}>Modéle</Text>
        <View style={styles.rect3}></View>
      </View>
      <View style={styles.kilometrageRow}>
        <Text style={styles.kilometrage}>Kilométrage</Text>
        <View style={styles.rect4}></View>
      </View>
      <View style={styles.etatRow}>
        <Text style={styles.etat}>Etat</Text>
        <View style={styles.rect5}></View>
      </View>
      <View style={styles.marque2Row}>
        <Text style={styles.marque2}>Marque</Text>
        <View style={styles.rect6}></View>
      </View>
      <Text style={styles.inforamtionVoiture}>Inforamtion Voiture</Text>
      <View style={styles.loremIpsum1Stack}>
        <Text style={styles.loremIpsum1}>Continue</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Congrat")}
          style={styles.button1}
        >
          <Text style={styles.loremIpsum2}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  marque: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7
  },
  rect1: {
    width: 178,
    height: 30,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 37
  },
  marqueRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 150,
    marginLeft: 44,
    marginRight: 53
  },
  type: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7
  },
  rect2: {
    width: 178,
    height: 30,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 47
  },
  typeRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 72,
    marginLeft: 52,
    marginRight: 53
  },
  modele: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7
  },
  rect3: {
    width: 178,
    height: 30,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 39
  },
  modeleRow: {
    height: 30,
    flexDirection: "row",
    marginTop: -81,
    marginLeft: 44,
    marginRight: 53
  },
  kilometrage: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7
  },
  rect4: {
    width: 178,
    height: 30,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 24
  },
  kilometrageRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 72,
    marginLeft: 30,
    marginRight: 53
  },
  etat: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7
  },
  rect5: {
    width: 178,
    height: 30,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 49
  },
  etatRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 55,
    marginRight: 53
  },
  marque2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7
  },
  rect6: {
    width: 178,
    height: 30,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 37
  },
  marque2Row: {
    height: 30,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 44,
    marginRight: 53
  },
  inforamtionVoiture: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 37,
    marginTop: -365,
    marginLeft: 17,
    alignSelf: "center"
  },
  loremIpsum1: {
    top: 5,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  button1: {
    top: 0,
    left: 0,
    width: 56,
    height: 26,
    position: "absolute",
    backgroundColor: "rgba(132,200,224,1)",
    borderRadius: 6
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5
  },
  loremIpsum1Stack: {
    width: 56,
    height: 26,
    marginTop: 345,
    marginLeft: 289
  }
});

export default InformationVoiture;
