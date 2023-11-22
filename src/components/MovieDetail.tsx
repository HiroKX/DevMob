import { ReactNode, useState, useEffect } from 'react';
import { Text, Button, StyleSheet, View} from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../routes/RootStack';
import { getMovie } from '../components/MovieService';
import Movie from "../models/Movie";
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../slice/FavoritesSlice';


type Props = NativeStackScreenProps<StackParamList,'Detail'>;

function MovieDetail({ navigation, route}: Props): ReactNode {
    const dispatch = useDispatch();
    let isFav = useSelector(state => state.favorites.indexOf(movie)) > -1;
    const [fav, setFav] = useState<boolean>(isFav);
    const [movie, setMovie] = useState<Movie>({
        id: 0,
        title: "Pas de film trouvé",
        releaseDate: "",
        voteAverage: 1,
        overview:""
      });
    useEffect(() => {
        async function call() {
            let movieGet: Movie|undefined = await getMovie(route.params.idMovie);
            if(movieGet != undefined)
                setMovie(movieGet);
        }
        call()
    }, [])
    return (
            <View style={styles.container}>
                <Text style={styles.title}>{movie.title} {movie.voteAverage}</Text>
                <Text style={styles.releaseDate}>{movie.releaseDate}</Text>
                <Text>{movie.overview}</Text>
                { fav ? <Button title="Retirer des favoris" onPress={() => {dispatch(removeFavorite(movie)); setFav(!fav)}}/>  : <Button title="Ajouter aux favoris" onPress={() => {dispatch(addFavorite(movie)); setFav(!fav)}}/> }
            </View>
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

export default MovieDetail;