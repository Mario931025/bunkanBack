import React from 'react'

import {NavigationContainer} from '@react-navigation/native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createDrawerNavigator} from '@react-navigation/drawer'

import { Icon } from 'react-native-elements';

import {createStackNavigator} from '@react-navigation/stack'

import TiendaStack from './TiendaStack'
import PerfilStack from './PerfilStack'
import MiTiendaStack from './MiTiendaStack'
import ShopBotton from '../componentes/ShopBotton';

const Tab = createBottomTabNavigator();
const Drawer = createStackNavigator();

const TabBar = () => {
 
    return(

        <Tab.Navigator
            initialRouteName="tienda"
            tabBarOptions={{ 
                inactiveTintColor:"#fff",
                activeTintColor:"#fff",
                style:{
                    borderTopLeftRadius:60,
                    borderTopRightRadius:60,
                    alignItems:"center",
                    backgroundColor:"#128c7e",
                    paddingBottom:5
                }
            }}

            screenOptions={({route}) => ({
                tabBarIcon:({color}) => mostrartIcono(route,color)
            })}
        >


            <Tab.Screen component={TiendaStack} name="tienda" options={{title:"tienda",
            tabBarIcon: () => <ShopBotton/>
        }}/>
            <Tab.Screen component={MiTiendaStack} name="mitienda" options={{title:"Mi tienda"}}/>
            <Tab.Screen component={PerfilStack} name="cuenta" options={{title:"cuenta"}}/>
        </Tab.Navigator>
    )
}

function mostrartIcono(route,color){

    let iconName = "";

    switch(route.name)
    {
        case "tienda":
            iconName = "cart-outline"
            break;
        case "cuenta":
            iconName ="account-circle-outline"
            break;
        case "mitienda":
            iconName ="cart-outline"
            break;

    }
    return (
        <Icon type="material-community" name={iconName} size={24} color={color}/>
    )


}


export default function RutasAutenticadas() {
    return (
        <NavigationContainer>
            <TabBar/>
        </NavigationContainer>
    )
}
