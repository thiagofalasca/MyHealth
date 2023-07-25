import { View, Text, TouchableOpacity, TextInput, Image, Modal, TouchableWithoutFeedback } from 'react-native'
import { useState } from 'react'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { styles } from "./EditVaccineStyle"
import { db, auth, storage } from '../../firebase/config'
import { updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { deleteObject } from '@firebase/storage'
import CustomDate from '../../components/CustomDate/CustomDate'
import Loading from '../../components/Loading/Loading'

const EditVaccine = (props) => {

    const { id, vaccineId, name, dose, date, nextDate, urlImage } = props.route.params.item;
    const [vaccineName, setVaccineName] = useState(name)
    const [doseVaccine, setDoseVaccine] = useState(dose)
    const [vaccineDate, setVaccineDate] = useState(date)
    const [nextVaccineDate, setNextVaccineDate] = useState(nextDate)
    const [vaccineUrlImage, setVaccineUrlImage] = useState(urlImage)

    const [open, setOpen] = useState(false)
    const [openImagePicker, setOpenImagePicker] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const save = async () => {
        try {
            const refDoc = getRefDoc()
            const imageRef = ref(storage, 'images/vaccine_' + vaccineId)
            const file = await fetch(vaccineUrlImage)
            const blob = await file.blob()

            await uploadBytes(imageRef, blob, { contentType: 'image/jpeg' })
            console.log("Arquivo enviado com sucesso!")

            const url = await getDownloadURL(imageRef)
            console.log('URL adquirida com sucesso!')

            await updateDoc(refDoc, {
                name: vaccineName,
                dose: doseVaccine,
                date: vaccineDate,
                nextDate: doseVaccine === 'Dose única' || doseVaccine === '3a. dose' ? null : nextVaccineDate,
                urlImage: url
            });
            console.log('Documento atualizado com sucesso!')
        } catch (error) {
            console.log('Erro: ' + JSON.stringify(error))
        } finally {
            setIsLoading(false)
            props.navigation.pop()
        }
    }

    const remove = async () => {
        setOpen(!open)
        const refDoc = getRefDoc()
        const imageRef = ref(storage, 'images/vaccine_' + vaccineId)

        try {
            await deleteObject(imageRef)
            console.log("Imagem excluída com sucesso!")
            await deleteDoc(refDoc);
            console.log("Documento excluído com sucesso!")
        } catch (error) {
            console.log('Erro: ' + JSON.stringify(error))
        } finally {
            setIsLoading(false)
            props.navigation.pop()
        }
    }

    const getRefDoc = () => {
        setIsLoading(true)
        const userId = auth.currentUser.uid
        return doc(db, "users", userId, "vaccines", id)
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
            setVaccineUrlImage(result.assets[0].uri)
            setOpenImagePicker(!openImagePicker)
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Data da vacinação</Text>
                        <CustomDate setDate={setVaccineDate} setDateText={vaccineDate}></CustomDate>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Vacina</Text>
                        <TextInput style={styles.input} onChangeText={setVaccineName} value={vaccineName}></TextInput>
                    </View>
                    <View style={styles.radioContainer}>
                        <Text style={styles.text}>Dose</Text>
                        <View style={styles.radioView}>
                            {['1a. dose', '2a. dose', '3a. dose', 'Dose única'].map(vaccineDose => (
                                <View key={vaccineDose} style={styles.radioButton}>
                                    <TouchableOpacity style={styles.outter} onPress={() => setDoseVaccine(vaccineDose)}>
                                        {doseVaccine === vaccineDose && <View style={styles.inner} />}
                                    </TouchableOpacity>
                                    <Text style={styles.vaccineText}>{vaccineDose}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.text}>Comprovante</Text>
                        <TouchableOpacity style={styles.selectButton} onPress={() => setOpenImagePicker(!openImagePicker)}>
                            <Text style={styles.selectText}>Selecionar imagem...</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType='fade'
                            transparent={true}
                            visible={openImagePicker}>
                            <TouchableWithoutFeedback onPress={() => setOpenImagePicker(false)}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalImageView}>
                                        <TouchableOpacity style={styles.modalImageButton} onPress={() => openImage('camera')}>
                                            <Text style={styles.textButton}>Câmera</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.modalImageButton} onPress={() => openImage('gallery')}>
                                            <Text style={styles.textButton}>Galeria</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </Modal>
                    </View>
                    <Image style={styles.image} source={{ uri: vaccineUrlImage }} />
                    {doseVaccine !== '3a. dose' && doseVaccine !== 'Dose única' && (
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>Próxima vacinação</Text>
                            <CustomDate setDate={setNextVaccineDate} setDateText={nextVaccineDate} />
                        </View>
                    )}
                    <TouchableOpacity style={styles.button} onPress={save}>
                        <Text style={styles.buttonText}>Salvar alterações</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.delButton} onPress={() => setOpen(!open)}>
                        <Text style={styles.buttonText}>🗑️Excluir</Text>
                    </TouchableOpacity>
                    <Modal
                        animationType='fade'
                        transparent={true}
                        visible={open}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.textPopUp}>Tem certeza que deseja{'\n'}remover essa vacina?</Text>
                                </View>
                                <View style={styles.buttonView}>
                                    <TouchableOpacity style={styles.modalYes} onPress={remove}>
                                        <Text style={styles.textButton}>SIM</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.modalCancel} onPress={() => setOpen(!open)}>
                                        <Text style={styles.textButton}>CANCELAR</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View >
            </View >
            {isLoading ? <Loading /> : null}
        </>
    )
}

export default EditVaccine