import { View, Text, TouchableOpacity, TextInput, Image, Modal, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { styles } from './NewVaccineStyle'
import { addDoc, collection, doc } from 'firebase/firestore'
import { auth, db, storage } from '../../firebase/config'
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage'
import CustomDate from '../../components/CustomDate/CustomDate'
import Loading from '../../components/Loading/Loading'

const NewVaccine = (props) => {

    const [name, setName] = useState('')
    const [dose, setDose] = useState('')
    const [date, setDate] = useState('')
    const [nextDate, setNextDate] = useState('')
    const [urlPhoto, setUrlPhoto] = useState('')

    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const cadastrar = () => {
        setIsLoading(true)
        const currentUser = auth.currentUser
        if (currentUser) {
            adicionarDocumento(currentUser)
        }
    }

    const adicionarDocumento = async (currentUser) => {
        try {
            const vaccineId = Date.now().toString(16) + Math.floor(Math.random() * 10000)
            const userDoc = doc(db, 'users', currentUser.uid)
            const colecao = collection(userDoc, 'vaccines')
            const imageRef = ref(storage, 'images/vaccine_' + vaccineId)
            const file = await fetch(urlPhoto)
            const blob = await file.blob()

            await uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
            console.log("Arquivo enviado com sucesso!")

            const url = await getDownloadURL(imageRef)
            console.log('URL adquirida com sucesso!')

            const documento = {
                vaccineId: vaccineId,
                name: name,
                dose: dose,
                date: date,
                nextDate: dose === 'Dose única' || dose === '3a. dose' ? null : nextDate,
                urlImage: url
            }

            const refDoc = await addDoc(colecao, documento)
            console.log('Documento inserido com sucesso: ' + JSON.stringify(refDoc))

        } catch (error) {
            console.log('Erro: ' + JSON.stringify(error))
        } finally {
            setIsLoading(false)
            props.navigation.pop()
        }
    }

    const openImage = async (sourceType) => {
        try {
            const options = { mediaType: 'photo', cameraType: 'back', quality: 1, sourceType: sourceType }
            const result = sourceType === 'camera' ? await launchCamera(options) : await launchImageLibrary(options)
            setImageUrl(result)
        } catch (error) {
            const errorMessage = sourceType === 'camera' ? 'Erro ao capturar imagem: ' : 'Erro ao escolher imagem: '
            console.log(errorMessage + JSON.stringify(error))
        }
    }

    const setImageUrl = (result) => {
        if (result.assets && result.assets.length > 0) {
            setUrlPhoto(result.assets[0].uri)
            setOpen(!open)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Data da vacinação</Text>
                        <CustomDate setDate={setDate}></CustomDate>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Vacina</Text>
                        <TextInput style={styles.input} onChangeText={setName} value={name}></TextInput>
                    </View>
                    <View style={styles.radioContainer}>
                        <Text style={styles.text}>Dose</Text>
                        <View style={styles.radioView}>
                            {['1a. dose', '2a. dose', '3a. dose', 'Dose única'].map(vaccineDose => (
                                <View key={vaccineDose} style={styles.radioButton}>
                                    <TouchableOpacity style={styles.outter} onPress={() => setDose(vaccineDose)}>
                                        {dose === vaccineDose && <View style={styles.inner} />}
                                    </TouchableOpacity>
                                    <Text style={styles.vaccineText}>{vaccineDose}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Comprovante</Text>
                        <TouchableOpacity style={styles.selectButton} onPress={() => setOpen(!open)}>
                            <Text style={styles.selectText}>Selecionar imagem...</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType='fade'
                            transparent={true}
                            visible={open}>
                            <TouchableWithoutFeedback onPress={() => setOpen(false)}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <TouchableOpacity style={styles.modalButton} onPress={() => openImage('camera')}>
                                            <Text style={styles.textButton}>Câmera</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modalButton} onPress={() => openImage('gallery')}>
                                            <Text style={styles.textButton}>Galeria</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>
                    </View>
                    <View style={styles.imageContainer}>
                        {urlPhoto && <Image source={{ uri: urlPhoto }} style={styles.image} />}
                    </View>
                    {dose !== '3a. dose' && dose !== 'Dose única' && (
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Próxima vacinação</Text>
                            <CustomDate setDate={setNextDate} />
                        </View>
                    )}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={cadastrar}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {isLoading ? <Loading /> : null}
        </>
    )
}

export default NewVaccine