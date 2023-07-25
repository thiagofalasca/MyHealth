import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: '95%',
        height: '55%',
        padding: 30,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    text: {
        marginTop: '2%',
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular'
    },
    date: {
        fontSize: 16,
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        marginLeft: '5%'
    },
    dateButton: {
        height: 35,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderRadius: 5
    }
})

export { styles }