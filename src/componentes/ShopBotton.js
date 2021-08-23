import React from 'react'
import {StyleSheet,Text,View,TouchableHighlight} from 'react-native'
//el touchableHighLight es como bootn que cambia de color a otro cuando lo presionas
import {Icon} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function ShopBotton() {

    const navigation = useNavigation();

    return (
        <TouchableHighlight>
            <Icon name="store" color="#fff" size={30}/>

        </TouchableHighlight>
       
    )
}

const styles = StyleSheet.create({
    
})
