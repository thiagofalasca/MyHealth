import { Text, TouchableOpacity, Image } from 'react-native'
import styles from './CardStyle'

const Card = ({ item, navigation }) => {

    const { name, dose, date, nextDate, urlImage } = item

    const navigateToEditVaccine = () => {
        navigation.navigate('EditVaccine', { item })
    }

    return (
        <TouchableOpacity style={styles.container} onPress={navigateToEditVaccine}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.dose}>{dose}</Text>
            <Text style={styles.date}>{date}</Text>
            <Image style={styles.image} source={{ uri: urlImage }} />
            <Text style={styles.nextDate}>{nextDate ? `Próxima dose em: ${nextDate}` : 'Não há próxima dose'}</Text>
        </TouchableOpacity>
    )
}

export default Card