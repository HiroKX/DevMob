import { ReactNode, useState, useEffect } from 'react';
import Movie from "../models/Movie";
import { getMovies } from './MovieService';
import { FlatList, Text, Button, StyleSheet, View } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../routes/RootStack';
import MovieList from './MovieList';

type Props = NativeStackScreenProps<StackParamList>;

function Home({ navigation }: Props): ReactNode {
    return (
        <View>

        </View>
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