import React from 'react'
import  {createStackNavigator} from '@react-navigation/stack'
import Tienda from '../pantallas/tienda/Tienda'
import AddProduct from '../pantallas/tienda/AddProduct'
import Contacto from '../pantallas/tienda/Contacto'
import MensajesList from '../pantallas/tienda/MensajesList'
import Detalle from '../pantallas/tienda/Detalle'

//
const Stack = createStackNavigator();

import { StyleSheet, Text, View } from 'react-native'

export default function TiendaStack() {
    return (
       <Stack.Navigator>
            <Stack.Screen  component={Tienda} name="tienda" options={{ headerShown:false }} />
            <Stack.Screen component={AddProduct} name="add-product" options={{title:"Agregar Producto", headerStyle:{ backgroundColor:"#127C7E"},headerTintColor:"#fff"}}/>
            <Stack.Screen component={Contacto} name="contacto" options={{title:"Contacto",headerStyle:{backgroundColor:"#127c7e"},headerTintColor:"#fff"}}/>
            <Stack.Screen component={MensajesList} name="mensajes" options={{title:"Mensajes",headerStyle:{backgroundColor:"#127c7e"},headerTintColor:"#fff"}}/>
            <Stack.Screen component={Detalle} name="detalle" options={{headerTransparent:true,headerTintColor:"#127c7e",title:""}}/>
       </Stack.Navigator>
    )
}

const styles = StyleSheet.create({

})
