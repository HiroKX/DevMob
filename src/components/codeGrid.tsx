import {StyleSheet, View} from "react-native";

const Flex = () => {
    return (
        <View style={[ styles.container ]}>
            <View style={[ styles.row, { flex:1} ]}>
                <View style={{flex: 1, backgroundColor: 'blue'}} />
                <View style={{flex: 1, backgroundColor: 'cyan'}} />
                <View style={{flex: 1, backgroundColor: 'red'}} />
            </View>
            <View style={[ styles.row, { flex: 3} ]}>
                <View style={{flex: 1, backgroundColor: 'deepskyblue'}} />
                <View style={{ flex: 4, backgroundColor: 'limegreen',
                    justifyContent:'center', rowGap:24 }}>
                    <View style={[styles.petitCarre, {  }]}/>
                    <View style={[styles.grosCarre, { alignSelf:'center' }]}/>
                    <View style={[styles.petitCarre, { alignSelf:'flex-end' }]}/>
                </View>
            </View>
            <View style={[ styles.row, { flex: 2, width:'100%', justifyContent:'space-between'} ]}>
                <View style={[styles.magenta]} />
                <View style={[styles.purple]} />
            </View>
            <View style={[ styles.row, { flex: 1, width:'100%', justifyContent:'space-evenly'} ]}>
                <View style={[styles.purple]} />
                <View style={[styles.magenta]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    grosCarre: {
        width: 150,
        height: 150,
        backgroundColor: 'gold',
    },
    petitCarre: {
        width: 20,
        height: 20,
        backgroundColor: 'gold',
    },
    purple: {
        flex:1,
        maxWidth:'30%',
        backgroundColor: 'purple'
    },
    magenta: {
        flex:1,
        maxWidth:'30%',
        backgroundColor: 'magenta'
    }
});