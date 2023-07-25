import { Text, FlatList, TextInput, TouchableOpacity, View } from 'react-native'
import { useState, useEffect } from 'react'
import { styles } from './MyVaccinesStyle'
import { db } from '../../firebase/config'
import { onSnapshot, query, collection } from 'firebase/firestore'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../../components/Card/Card'
import { reducerSetVaccineList } from '../../../redux/vaccineListSlice'

const MyVaccines = (props) => {

    const [searchText, setSearchText] = useState('')
    const userId = useSelector((state) => state.user.userId)
    const vaccineList = useSelector((state) => state.vaccineList.vaccineList)
    const dispatch = useDispatch()

    useEffect(() => {
        const q = query(collection(db, 'users', userId, 'vaccines'))

        onSnapshot(q, (snapshot) => {
            const vaccines = []
            snapshot.forEach((doc) => {
                vaccines.push({
                    id: doc.id,
                    vaccineId: doc.data().vaccineId,
                    name: doc.data().name,
                    dose: doc.data().dose,
                    date: doc.data().date,
                    nextDate: doc.data().nextDate,
                    urlImage: doc.data().urlImage
                })
                console.log('Documento: ' + JSON.stringify(doc.data()))
            })
            dispatch(reducerSetVaccineList({ vaccineList: vaccines }))
        })
    }, [])

    const filteredVaccines = vaccineList.filter(vaccine =>
        vaccine.name.toLowerCase().includes(searchText.toLowerCase())
    )

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.input} placeholder='🔍 PESQUISAR VACINA...' onChangeText={setSearchText} value={searchText}></TextInput>
            </View>

            <View style={{ flex: 8 }}>
                <FlatList
                    data={filteredVaccines}
                    extraData={filteredVaccines}
                    renderItem={({ item }) => <Card item={item} navigation={props.navigation} />}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton} onPress={() => props.navigation.push('NewVaccine')}>Nova vacina</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyVaccines;