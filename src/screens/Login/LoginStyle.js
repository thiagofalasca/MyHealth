import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccd4e0'
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row',
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_header: {
        fontSize: 44,
        fontFamily: 'AveriaLibre-Regular',
        textDecorationLine: 'underline',
        color: '#419ED7'
    },
    image: {
        width: 45,
        height: 45
    },
    mid: {
        flex: 5,
        alignItems: 'center'
    },
    text_mid: {
        fontSize: 32,
        fontFamily: 'AveriaLibre-Regular',
        color: '#419ED7',
        textAlign: 'center',
        marginTop: '15%',
        marginBottom: '15%'
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: '5%',
        alignItems: 'center'
    },
    inputName: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        width: '15%',
        color: 'white'
    },
    input: {
        backgroundColor: 'white',
        width: '70%',
        height: '80%',
        color: '#3F92C5',
        borderRadius: 5
    },
    wrongData: {
        fontSize: 14,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FD7979'
    },
    footer: {
        flex: 3.5,
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    loginButton: {
        backgroundColor: '#49B976',
        width: '35%',
        height: '14%',
        marginTop: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {
            height: 20,
            width: 10
        },
        shadowRadius: 5,
        elevation: 10
    },
    createButton: {
        backgroundColor: '#419ED7',
        width: '60%',
        height: '14%',
        marginTop: '12%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {
            height: 20,
            width: 10
        },
        shadowRadius: 5,
        elevation: 10
    },
    forgotButton: {
        backgroundColor: '#B5C7D1',
        width: '60%',
        height: '15%',
        marginTop: '12%',
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
    }
})

export { styles }