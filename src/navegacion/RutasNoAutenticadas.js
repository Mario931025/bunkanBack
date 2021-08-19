
// va a tener login, registro, cambio de contraseña
//aqui vamosa  crear la nevgacion principal y esta envuelve
//la navegacion cuando un usario no esta registrado. 

import React from 'react'

//se sua parta navegar entre pantallas
import  {createStackNavigator} from '@react-navigation/stack'
import  {NavigationContainer} from '@react-navigation/native';

import Login from '../pantallas/cuenta/Login'
import Registrar from '../pantallas/cuenta/Registrar'
import RestaurarPassword from '../pantallas/cuenta/RestaurarPassword'


const Stack= createStackNavigator();


export default function RutasNoAutenticadas() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login" screenOptions={{headerShown:false}}>
                <Stack.Screen component={Login} name="login"/>
                <Stack.Screen component={Registrar} name="register"/>
                <Stack.Screen component={RestaurarPassword} name="lostpassword"/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
