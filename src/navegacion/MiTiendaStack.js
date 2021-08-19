import React from 'react'
import  {createStackNavigator} from '@react-navigation/stack'
import MiTenda from '../pantallas/miTienda/MiTienda'
import EditarProducto from '../pantallas/miTienda/EditarProducto'
import { StyleSheet } from 'react-native'

const Stack = createStackNavigator();


export default function MiTiendaStack() {
    return (
      <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:"#127c7e"},headerTintColor:"#fff" }}>
           <Stack.Screen  component={MiTenda} name="mitienda" options={{ title:"Mi Tienda"}} />
           <Stack.Screen  component={EditarProducto} name="edit-product" options={{ title:"Editar Producto"}} />
      </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
