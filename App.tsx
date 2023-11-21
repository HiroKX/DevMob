import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ReactElement, useState, useEffect} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStack from './src/routes/RootStack'

const Stack = createNativeStackNavigator();


export default function App(): ReactElement {

  return (
      <NavigationContainer>
        <RootStack/>
      </NavigationContainer>
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