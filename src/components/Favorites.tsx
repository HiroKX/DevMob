import { ReactNode } from 'react';
import { FlatList, StyleSheet, View, Text } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from '../routes/RootStack';
import { useSelector } from 'react-redux';


type Props = NativeStackScreenProps<StackParamList>;

function Favorites({ navigation }: Props): ReactNode {
    const lFavorites = useSelector(state => state.favorites);
    console.log(lFavorites);

    return (
        <View>
            <Text style={styles.title}>Vos favoris : </Text>
            <FlatList data={lFavorites} renderItem={({ item }) =>
            <View style={styles.container}>
                <Text style={styles.title}>{item.title} {item.voteAverage}</Text>
                <Text style={styles.releaseDate}>{item.releaseDate}</Text>
            </View>
            } />
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

export default Favorites;