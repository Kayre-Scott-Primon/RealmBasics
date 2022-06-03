import React, { useEffect, useState } from "react";
import styles from './style'
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
} from 'react-native'


function Splash({navigation}){

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home')
        },1200)
    },[])
  
    return(
        <View style={styles.container}>
        <StatusBar backgroundColor={'rgba(2,50,150,1)'} barStyle={"light-content"}/>
            <Image source={require('../../assets/image/realm-logo.png')} style={styles.logo}/>
            <Text style={styles.text}>
                Realm
            </Text>
        </View>
    ) 
}

export  default Splash