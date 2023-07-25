import { Text, FlatList, TouchableOpacity, View } from 'react-native'
import { styles } from './NextVaccinesStyle'
import LargeCard from '../../components/LargeCard/LargeCard'
import { useSelector } from 'react-redux'

const NextVaccine = (props) => {

    const vaccineList = useSelector((state) => state.vaccineList.vaccineList)
    const filteredVaccineList = vaccineList.filter(item => item.nextDate != null)

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <FlatList
                    data={filteredVaccineList}
                    extraData={filteredVaccineList}
                    renderItem={LargeCard}
                    keyExtractor={item => item.id}
                    numColumns={1}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => props.navigation.push('NewVaccine')}>Nova vacina</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NextVaccine