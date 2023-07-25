import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './ForgotPassStyle'
import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../firebase/config'
import Loading from '../../components/Loading/Loading'

const ForgotPass = (props) => {

    const [email, setEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const redefinirSenha = () => {
        setIsLoading(true)
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("Email enviado com sucesso")
            })
            .catch((error) => {
                console.log("Erro ao recuperar senha " + JSON.stringify(error))
            })
            .finally(() => {
                setIsLoading(false)
                props.navigation.popToTop()
            })
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>E-mail</Text>
                    <TextInput style={styles.input} onChangeText={setEmail} value={email}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { redefinirSenha() }}>
                    <Text style={styles.text}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
            {isLoading ? <Loading /> : null}
        </>
    )
}

export default ForgotPass