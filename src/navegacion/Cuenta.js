import React from 'react'
import {createStackNavigator,HeaderStyleInterpolators} from '@react-navigation/stack'

import ConfirmarNumero from '../pantallas/cuenta/ConfirmarNumero'
import EnviarConfirmacion from '../pantallas/cuenta/EnviarConfirmacion'
import { StyleSheet, Text, View } from 'react-native'

const Stack = createStackNavigator();




export default function Cuenta() {
    return (
        <Stack.Navigator>
            <Stack.Screen component={EnviarConfirmacion} name="enviar-confirmacion" 
            options ={{title:"Confirma tu numero de Télefono" , headerStyle :{backgroundColor:"#127c7e"} , headerTintColor:"#fff"}}/>
            <Stack.Screen component={ConfirmarNumero} name="confirmar-movil" 
            options ={{title:"Confirma tu numero" , headerStyle :{backgroundColor:"#127c7e"} , headerTintColor:"#fff"}}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
