import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Search from './src/components/search'
import {ReactElement, useState, useEffect} from "react";
import Personne from "./src/models/Personne";
import PersonneList from "./src/components/PersonneList";
import AjoutPersonne from "./src/components/AjoutPersonne";


const data: Array<Personne> = [
  { id: 1, nom: "Andor", prenom: "Cassian"},
]



export default function App(): ReactElement {
  const [lPersonne, setlPersonne] = useState<Array<Personne>>(data);

function addPersonneList(nom: string, prenom: string){
  let max: number = Math.max.apply(Math, lPersonne.map(function(o:any):number { return o.id; })) + 1
  setlPersonne([...lPersonne,{id:max,nom:nom,prenom:prenom}])
}

  return (
      <View style={styles.container}>
        <View style={styles.rowOne}>
          <Search/>
        </View>
        <View style={styles.rowTwo}>
          <AjoutPersonne addPersonne={addPersonneList}/>
          <PersonneList personnes={lPersonne} />
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