import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
    drawerContainer: {
        backgroundColor: '#ADD4D0',
        flex: 1
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
    headerText: {
        fontSize: 28,
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        marginBottom: 30
    },
    line: {
        width: '95%',
        borderWidth: 0.8,
        borderColor: '#3F92C5',
    },
    text: {
        color: '#3F92C5',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular'
    }
})

export { styles }