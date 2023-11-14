import {Button, StyleSheet, TextInput, View,} from 'react-native';

export default function App() {
    return <View style={[styles.container]}>
        <View style={{flex:3}}>
            <TextInput
                editable
                maxLength={40}
                placeholder="Rechercher"
                style={[styles.button]}
            />
        </View>
        <View style={{flex:2}}>
            <Button
                title="Rechercher"
                color="limegreen"
            />
        </View>
        
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding:10,
        margin:10,
        marginTop:100,
        gap: 8
    },
    button: {
        padding: 5,
        borderStyle:'solid',
        borderColor:'dimgrey',
        borderWidth:2
    }
});