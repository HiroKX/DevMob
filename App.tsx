import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Search from './src/components/search'
import {ReactElement} from "react";
import Personne from "./src/components/Personne";
import PersonneList from "./src/components/PersonneList";

const data: Array<Personne> = [
  { id: "1", nom: "Andor", prenom: "Cassian"},
  { id: "2", nom: "Ketchum", prenom: "Sacha"},
  { id: "3", nom: "Stark", prenom: "Eddard"},
  { id: "4", nom: "Sacquet", prenom: "Frodon"}
]

export default function App(): ReactElement {
  return (
      <View style={styles.container}>
        <View style={styles.rowOne}>
          <Search/>
        </View>
        <View style={styles.rowTwo}>
          <PersonneList personnes={data} />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  rowOne: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rowTwo: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 64
  }
});