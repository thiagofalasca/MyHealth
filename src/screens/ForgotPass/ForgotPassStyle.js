import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD4D0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer:
    {
        marginTop: '40%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    input: {
        width: '75%',
        height: '75%',
        backgroundColor: 'white',
        marginLeft: '5%',
        color: '#3F92C5',
        borderRadius: 5
    },
    button: {
        marginTop: '60%',
        backgroundColor: '#49B976',
        width: '45%',
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        borderRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    }
})

export { styles }