import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD4D0',
    },
    main: {
        flex: 9,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    image: {
        width: '53%',
        height: '16%',
        marginLeft: 160,
        marginBottom: '5%'
    },
    text: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        width: '40%',
        textAlign: 'right',
        color: 'white',
        marginRight: 5
    },
    input: {
        backgroundColor: 'white',
        width: '55%',
        height: '75%',
        color: '#3F92C5',
        borderRadius: 5
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 40,
        backgroundColor: '#49B976',
        width: '45%',
        height: '5%',
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
    delButton: {
        backgroundColor: '#FD7979',
        width: '25%',
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
    selectButton: {
        backgroundColor: '#419ED7',
        width: '40%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 60,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5
    },
    selectText: {
        fontSize: 14,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    vaccineText: {
        marginLeft: 5,
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    radioContainer: {
        flexDirection: 'row',
        marginBottom: '5%',
        alignItems: 'center'
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        marginTop: 10
    },
    radioView: {
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '60%',
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '95%',
        height: '23%',
        padding: 30,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5
    },
    textPopUp: {
        fontSize: 18,
        fontFamily: 'AveriaLibre-Regular',
        color: '#FD7979',
        textAlign: 'center'
    },
    buttonView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    textButton: {
        fontSize: 22,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
    modalYes: {
        backgroundColor: '#FF8383',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: '90%',
        marginRight: 30
    },
    modalCancel: {
        backgroundColor: '#3F92C5',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: '90%'
    },
    modalImageView: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 10,
        width: '80%',
        height: '10%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5
    },
    modalImageButton: {
        flex: 1,
        alignItems: 'center',
        margin: '5%',
        backgroundColor: '#3F92C5',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5
    },
    textImageButton: {
        fontSize: 20,
        fontFamily: 'AveriaLibre-Regular',
        color: 'white'
    },
})

export { styles }




