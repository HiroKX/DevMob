import { ReactNode, useState } from 'react';
import Movie from "../models/Movie";
import {FlatList, Text, StyleSheet, View} from "react-native";

export interface MovieListProps {
    personnes: Array<Movie>;
}

function MovieList({ movies }: MovieListProps): ReactNode {
    return (
        <FlatList data={movies} renderItem={({item}) =>
            (<View style={styles.container}>
                <Text style={styles.title}>{item.title} {item.voteAverage}</Text>
                <Text style={styles.releaseDate}>{item.releaseDate}</Text>
                <Text>{item.overview}</Text>
                </View>)
        }/>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:8,
    },
    title: {
        fontWeight:"bold",
        fontSize:16
    },
    releaseDate: {
        fontStyle: "italic"
    }
});

export default MovieList;