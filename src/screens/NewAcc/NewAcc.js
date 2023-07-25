import { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc, collection } from 'firebase/firestore'
import { auth, db } from '../../firebase/config'
import { styles } from './NewAccStyle'
import CustomDate from '../../components/CustomDate/CustomDate'
import Loading from '../../components/Loading/Loading'

const NewAcc = (props) => {

    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [birth, setDate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rpass, setRpass] = useState('')
    const [error, setError] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const errorMessages = {
        missingFields: 'Preencha todos os campos obrigatórios',
        invalidEmail: 'Email inválido!',
        emailInUse: 'Email já está em uso!',
        weakPassword: 'A senha precisa conter no mínimo 6 caracteres',
        passwordMismatch: 'As senhas não correspondem!'
    }

    const cadastrar = () => {
        setError('')
        if (name && gender && birth) {
            if (password === rpass) {
                setIsLoading(true)
                createUserWithEmailAndPassword(auth, email, password)
                    .then((user) => {
                        console.log('Usuário criado com sucesso: ' + JSON.stringify(user))
                        adicionarDocumento(user.user.uid)
                            .then(() => {
                                console.log('Documento inserido com sucesso!')
                            })
                            .catch((error) => {
                                console.log('Erro ao inserir documento: ' + JSON.stringify(error))
                            })
                        props.navigation.popToTop()
                    })
                    .catch((error) => {
                        const { code } = error
                        console.log('Erro ao criar usuário: ' + JSON.stringify(error))
                        if (code === 'auth/invalid-email' || code === 'auth/missing-email') {
                            setError(errorMessages.invalidEmail)
                        } else if (code === 'auth/email-already-in-use') {
                            setError(errorMessages.emailInUse)
                        } else if (code === 'auth/weak-password' || code === 'auth/missing-password') {
                            setError(errorMessages.weakPassword)
                        }
                    })
                    .finally(() => setIsLoading(false))
            } else {
                setError(errorMessages.passwordMismatch)
            }
        } else {
            setError(errorMessages.missingFields)
        }
    }

    const adicionarDocumento = (uid) => {
        const colecao = collection(db, "users")
        const documento = {
            name: name,
            gender: gender,
            birth: birth
        }
        return setDoc(doc(colecao, uid), documento)
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Nome completo</Text>
                        <TextInput style={styles.input} onChangeText={setName} value={name}></TextInput>
                    </View>
                    <View style={styles.radioContainer}>
                        <Text style={styles.text}>Sexo</Text>
                        {['Masculino', 'Feminino'].map(sexuality => (
                            <View key={sexuality} style={styles.radioButton}>
                                <TouchableOpacity style={styles.outter} onPress={() => setGender(sexuality)}>
                                    {gender === sexuality && <View style={styles.inner} />}
                                </TouchableOpacity>
                                <Text style={styles.genderText}>{sexuality}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Data nascimento</Text>
                        <CustomDate setDate={setDate}></CustomDate>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>E-mail</Text>
                        <TextInput style={styles.input} onChangeText={setEmail} value={email}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Senha</Text>
                        <TextInput style={styles.input} secureTextEntry={true} onChangeText={setPassword} value={password}></TextInput>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Repetir senha</Text>
                        <TextInput style={styles.input} secureTextEntry={true} onChangeText={setRpass} value={rpass}></TextInput>
                    </View>
                    <Text style={styles.wrongPass}>{error}</Text>
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={() => { cadastrar() }}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {isLoading ? <Loading /> : null}
        </>
    )
}

export default NewAcc