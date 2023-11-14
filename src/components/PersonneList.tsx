import { ReactNode } from 'react';
import Personne from "./Personne";
import {FlatList, Text, StyleSheet} from "react-native";

interface PersonneListProps {
    personnes: Array<Personne>;
}

function PersonneList({ personnes }: PersonneListProps): ReactNode {
    return (
        <FlatList data={personnes} renderItem={({item}) =>
            (<Text style={styles.item}>{item.prenom} {item.nom}</Text>)
        }/>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 8,
        marginHorizontal: 16,
    }
});

export default PersonneList;