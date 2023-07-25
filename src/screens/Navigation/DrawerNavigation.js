import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from '../../components/CustomDrawer/CustomDrawer';
import MyVaccines from '../MyVaccines/MyVaccines'
import NextVaccines from '../NextVaccine/NextVaccines'

const Drawer = createDrawerNavigator()

const DrawerNavigation = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                drawerLabelStyle: {
                    color: '#3F92C5',
                    fontSize: 20,
                    fontFamily: 'AveriaLibre-Regular',
                }
            }} >
            <Drawer.Screen name="MyVaccines" component={MyVaccines}
                options={{
                    title: '💉 Minhas vacinas',
                    headerTitle: 'Minhas vacinas',
                    headerTintColor: '#ADD4D0',
                    headerTitleStyle: { fontSize: 30, color: '#419ED7', fontFamily: 'AveriaLibre-Regular' },
                    headerStyle: { backgroundColor: '#C1E7E3' },
                    headerShown: true
                }} />
            <Drawer.Screen name="NextVaccines" component={NextVaccines}
                options={{
                    title: '📅 Próximas vacinas',
                    headerTitle: 'Próximas vacinas',
                    headerTintColor: '#ADD4D0',
                    headerTitleStyle: { fontSize: 30, color: '#419ED7', fontFamily: 'AveriaLibre-Regular' },
                    headerStyle: { backgroundColor: '#C1E7E3' },
                    headerShown: true
                }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigation

