import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity
} from "react-native";

function InformationVendeur(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.nomRow}>
        <Text style={styles.nom}>Nom</Text>
        <View style={styles.rect}></View>
      </View>
      <View style={styles.eMailRow}>
        <Text style={styles.eMail}>e-mail</Text>
        <View style={styles.rect3}></View>
      </View>
      <View style={styles.telephoneRow}>
        <Text style={styles.telephone}>Telephone</Text>
        <View style={styles.rect4}></View>
      </View>
      <View style={styles.villeRow}>
        <Text style={styles.ville}>Ville</Text>
        <View style={styles.rect5}></View>
      </View>
      <View style={styles.prenom2Row}>
        <Text style={styles.prenom2}>Prenom</Text>
        <View style={styles.rect6}></View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Untitled1")}
        style={styles.button}
      >
        <Text style={styles.loremIpsum}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        vous avez un compte? vous pouvez vous connecter
      </Text>
      <Text style={styles.inforamtionVendeur}>Inforamtion vendeur</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  nom: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 7
  },
  rect: {
    width: 178,
    height: 30,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 55
  },
  nomRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 148,
    marginLeft: 51,
    marginRight: 46
  },
  eMail: {
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
    marginLeft: 51
  },
  eMailRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 128,
    marginLeft: 47,
    marginRight: 46
  },
  telephone: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6
  },
  rect4: {
    width: 178,
    height: 30,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 47
  },
  telephoneRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 24,
    marginRight: 46
  },
  ville: {
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
    marginLeft: 53
  },
  villeRow: {
    height: 30,
    flexDirection: "row",
    marginTop: -134,
    marginLeft: 56,
    marginRight: 46
  },
  prenom2: {
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
    marginLeft: 51
  },
  prenom2Row: {
    height: 30,
    flexDirection: "row",
    marginTop: -82,
    marginLeft: 36,
    marginRight: 46
  },
  button: {
    width: 56,
    height: 26,
    backgroundColor: "rgba(132,200,224,1)",
    borderRadius: 6,
    marginTop: 204,
    marginLeft: 289
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5
  },
  text: {
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 321,
    height: 17,
    marginTop: 12,
    marginLeft: 24
  },
  inforamtionVendeur: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 34,
    marginTop: -423,
    marginLeft: 28
  }
});

export default InformationVendeur;
