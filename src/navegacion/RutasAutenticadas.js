import React from 'react'

import {NavigationContainer} from '@react-navigation/native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createDrawerNavigator} from '@react-navigation/drawer'

import {createStackNavigator} from '@react-navigation/stack'

import TiendaStack from './TiendaStack'
import PerfilStack from './PerfilStack'
import MiTiendaStack from './MiTiendaStack'

const Tab = createBottomTabNavigator();
const Drawer = createStackNavigator();

const TabBar = () => {
 
    return(

        <Tab.Navigator>
            <Tab.Screen component={TiendaStack} name="tienda" options={{title:"tienda"}}/>
            <Tab.Screen component={MiTiendaStack} name="mitienda" options={{title:"Mi tienda"}}/>
            <Tab.Screen component={PerfilStack} name="cuenta" options={{title:"cuenta"}}/>
        </Tab.Navigator>
    )
}


export default function RutasAutenticadas() {
    return (
        <NavigationContainer>
            <TabBar/>
        </NavigationContainer>
    )
}
