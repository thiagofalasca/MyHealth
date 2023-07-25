import { View, ImageBackground, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './LoginStyle'
import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase/config'
import { useDispatch } from 'react-redux'
import { reducerSetUser } from '../../../redux/userSlice'
import { doc, getDoc } from 'firebase/firestore'
import Loading from '../../components/Loading/Loading'

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isLoading, setIsLoading] = useState(false)
    const [invalidData, setInvalidData] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            setEmail('')
            setPassword('')
            setInvalidData(false)
        })
        return unsubscribe
    }, [props.navigation])

    const autenticar = () => {
        setIsLoading(true)
        setInvalidData(false)

        signInWithEmailAndPassword(auth, email, password)
            .then(({ user: { uid: userId } }) => {
                console.log("Login realizado com sucesso: " + userId)
                const userRef = doc(db, 'users', userId)
                getDoc(userRef)
                    .then((docSnap) => {
                        const userName = docSnap.data().name
                        dispatch(reducerSetUser({
                            userId: userId,
                            email: email,
                            password: password,
                            userName: userName,
                        }))
                        props.navigation.push('DrawerNavigation')
                    })
                    .catch((error) => {
                        console.log('Erro ao obter dados do usuário: ' + JSON.stringify(error))
                    })
            })
            .catch((error) => {
                console.log("Erro ao realizar login: " + JSON.stringify(error))
                if (error.code === "auth/invalid-email" || error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
                    setInvalidData(true)
                }
            })
            .finally(() => setIsLoading(false))
    }

    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={require('../../../assets/images/imagemLogin.jpg')} resizeMode="cover" style={styles.backgroundImage} imageStyle={{ opacity: 0.15 }}>
                    <View style={styles.header}>
                        <Image style={styles.image} source={require('../../../assets/images/injecao.png')} />
                        <Text style={styles.text_header}>MyHealth</Text>
                    </View>
                    <View style={styles.mid}>
                        <Text style={styles.text_mid}>Controle as suas vacinas{'\n'}e fique seguro</Text>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputName}>E-mail</Text>
                            <TextInput style={styles.input} onChangeText={setEmail} value={email} />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.inputName}>Senha</Text>
                            <TextInput style={styles.input} secureTextEntry={true} onChangeText={setPassword} value={password} />
                        </View>
                        {invalidData ? <Text style={styles.wrongData} >E-mail e/ou senha inválido(s)</Text> : null}
                    </View>

                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.loginButton} onPress={() => { autenticar() }}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.createButton} onPress={() => props.navigation.push('NewAcc')}>
                            <Text style={styles.buttonText}>Criar minha conta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.forgotButton} onPress={() => props.navigation.push('ForgotPass')}>
                            <Text style={[styles.buttonText, { fontSize: 20, }]}>Esqueci minha senha</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            {isLoading ? <Loading /> : null}
        </>
    )
}

export default Login