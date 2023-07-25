import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD4D0'
    },
    main: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        backgroundColor: '#49B976',
        width: '35%',
        height: '25%',
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
    buttonText: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    wrongPass: {
        fontSize: 14,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FD7979'
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        width: '35%',
        textAlign: 'right',
        color: 'white',
        marginRight: '5%'
    },
    input: {
        backgroundColor: 'white',
        width: '55%',
        height: '75%',
        color: '#3F92C5',
        borderRadius: 5
    },
    genderText: {
        marginLeft: 5,
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '5%'
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10
    },
    outter: {
        width: 18,
        height: 18,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inner: {
        width: 14,
        height: 14,
        backgroundColor: '#3F92C5',
        borderRadius: 10
    }
})

export { styles }