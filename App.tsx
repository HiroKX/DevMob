import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Search from './src/components/search'
import {ReactElement, useState, useEffect} from "react";
import Movie from './src/models/Movie';
import {getMovies} from './src/components/MovieService'
import MovieList from "./src/components/MovieList";




export default function App(): ReactElement {
  const [lMovie, setlMovie] = useState<Array<Movie>>();
  useEffect(()=>{
    async function call(){
      let movie:Movie[] = await getMovies();
      setlMovie(movie);
    }
     call()
  }, [])


  return (
      <View style={styles.container}>
        <View>
          <MovieList movies={lMovie}/>
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