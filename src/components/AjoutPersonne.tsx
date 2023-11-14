import {Button, StyleSheet, TextInput, View,} from 'react-native';
import MyButtonProps from '../utils/MyButtonProps';
import { useState } from 'react';
import {PersonneListProps} from "./PersonneList";

interface AjoutPersonneProps{
    addPersonne: (nom: string, prenom: string) => void,
}

export default function AjoutPersonne({addPersonne}:AjoutPersonneProps) {
    
    const [nom, setNom] = useState<string|undefined>();
    const [prenom, setPrenom] = useState<string|undefined>();

    function handlePress(){
        addPersonne(nom!,prenom!)
        setNom("")
        setPrenom("")
    }

    function handlePressCancel(){
        setNom("")
        setPrenom("")
    }

    return <View style={[styles.container]}>
        <View>
            <TextInput
                editable
                maxLength={40}
                placeholder="Entrer un Nom"
                value={nom}
                onChangeText={setNom}
                style={[styles.textInput]}
            />
            <TextInput
                editable
                maxLength={40}
                value={prenom}
                onChangeText={setPrenom}
                placeholder="Entrer un Prénom"
                style={[styles.textInput]}
            />
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={[styles.mid]}>
                <MyButtonProps title="Annuler" color="grey" pressed={handlePressCancel} colorPress="blue"/>
            </View>
            <View style={[styles.mid]}>
                <MyButtonProps title="Ajouter" color="limegreen" pressed={handlePress} colorPress="blue"/>
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: 'column',
    },
    mid: {
        width: "50%",
        padding: 2,
    },
    searchButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 20,
        elevation: 3,
     },
     textInput: {
        padding: 5,
        borderStyle:'solid',
        borderColor:'dimgrey',
        borderWidth:2,
        margin: 3
    }
});