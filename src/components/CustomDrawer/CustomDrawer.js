import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { View, Text } from 'react-native'
import { styles } from './CustomDrawerStyle'
import { useSelector } from 'react-redux'

const CustomDrawer = (props) => {

    const userName = useSelector((state) => state.user.userName)

    return (
        <DrawerContentScrollView {...props} style={styles.drawerContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Olá {userName}!</Text>
                <View style={styles.line} />
            </View>
            <View>
                <DrawerItemList {...props} />
                <DrawerItem labelStyle={styles.text} label="❌ Sair" onPress={() => props.navigation.popToTop()} />
            </View>
        </DrawerContentScrollView>
    )
}

export default CustomDrawer