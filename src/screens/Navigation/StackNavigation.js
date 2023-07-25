import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Login/Login'
import NewAcc from '../NewAcc/NewAcc'
import ForgotPass from '../ForgotPass/ForgotPass'
import NewVaccine from '../NewVaccine/NewVaccine'
import DrawerNavigation from './DrawerNavigation'
import EditVaccine from '../EditVaccine/EditVaccine'
import { Provider } from 'react-redux'
import { store } from '../../../redux/store'

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="NewAcc" component={NewAcc}
                        options={{
                            headerTitle: 'Nova Conta',
                            headerTintColor: '#ADD4D0',
                            headerTitleStyle: { fontSize: 30, color: '#419ED7', fontFamily: 'AveriaLibre-Regular' },
                            headerStyle: { backgroundColor: '#C1E7E3' },
                            headerShown: true
                        }} />
                    <Stack.Screen name="ForgotPass" component={ForgotPass}
                        options={{
                            headerTitle: '💉 MyHealth',
                            headerTintColor: '#ADD4D0',
                            headerTitleStyle: { fontSize: 30, color: '#419ED7', fontFamily: 'AveriaLibre-Regular' },
                            headerStyle: { backgroundColor: '#C1E7E3' },
                            headerShown: true
                        }} />
                    <Stack.Screen name="NewVaccine" component={NewVaccine}
                        options={{
                            headerTitle: 'Nova Vacina',
                            headerTintColor: '#ADD4D0',
                            headerTitleStyle: { fontSize: 30, color: '#419ED7', fontFamily: 'AveriaLibre-Regular' },
                            headerStyle: { backgroundColor: '#C1E7E3' },
                            headerShown: true
                        }} />
                    <Stack.Screen name="EditVaccine" component={EditVaccine}
                        options={{
                            headerTitle: 'Editar Vacina',
                            headerTintColor: '#ADD4D0',
                            headerTitleStyle: { fontSize: 30, color: '#419ED7', fontFamily: 'AveriaLibre-Regular' },
                            headerStyle: { backgroundColor: '#C1E7E3' },
                            headerShown: true
                        }} />
                    <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default StackNavigation;