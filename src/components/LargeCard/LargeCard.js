import { View, Text } from 'react-native'
import styles from './LargeCardStyle'

const LargeCard = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.nextDate}>{item.nextDate}</Text>
            </View>
        </View>
    )
}

export default LargeCard