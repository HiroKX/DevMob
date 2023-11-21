import { ReactNode, useState, useEffect } from 'react';
import Movie from "../models/Movie";
import { getMovies } from './MovieService';
import { FlatList, Text, Button, StyleSheet, View } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../routes/RootStack';

type Props = NativeStackScreenProps<StackParamList>;

export interface MovieListProps {
    movie: Array<Movie>;
}



function MovieList({ navigation }: Props): ReactNode {
    const [lMovie, setlMovie] = useState<Array<Movie>>();
    useEffect(() => {
        async function call() {
            let movie: Movie[] = await getMovies();
            setlMovie(movie);
        }
        call()
    }, [])
    return (
        <FlatList data={lMovie} renderItem={({ item }) =>
        (<View style={styles.container}>
            <Text style={styles.title}>{item.title} {item.voteAverage}</Text>
            <Text style={styles.releaseDate}>{item.releaseDate}</Text>
            <Text>{item.overview}</Text>
            <Button title="Voir le détail" onPress={() => navigation.navigate('Detail', {
                idMovie: item.id,
            })} />
        </View>)
        } />
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16
    },
    releaseDate: {
        fontStyle: "italic"
    }
});

export default MovieList;