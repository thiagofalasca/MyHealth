import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD4D0'
    },
    searchContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        height: '50%',
        borderRadius: 5,
        padding: 0,
        paddingLeft: 10,
        color: 'gray'
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        marginTop: 20,
        backgroundColor: '#49B976',
        width: '40%',
        height: '45%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    textButton: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    }
})

export { styles }