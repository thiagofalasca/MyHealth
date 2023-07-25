import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '47.5%',
        borderRadius: 10,
        margin: 5,
        padding: 5,
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
        color: '#3F92C5',
        marginBottom: 5
    },
    dose: {
        fontSize: 13,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white',
        backgroundColor: '#3F92C5',
        width: '50%',
        textAlign: 'center',
        marginBottom: 5
    },
    date: {
        fontSize: 14,
        fontFamily: 'AveriaLibre-Regular',
        marginBottom: 5,
        color: 'gray'
    },
    image: {
        width: '85%',
        height: 80,
        marginBottom: 5
    },
    nextDate: {
        fontSize: 12,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FD7979'
    }
})

export default styles