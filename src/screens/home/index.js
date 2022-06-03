import React, {useEffect} from "react";
import styles from './style'
import {
    View,
    Text,
    ScrollView,
    BackHandler,
    TouchableOpacity,
    PermissionsAndroid,
    StatusBar
} from 'react-native'

function Home({navigation}){

    async function permission(){
        try{
            const granted = await PermissionsAndroid.request(
                 PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            )
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
            }else{
            }
        }catch(e){
            console.log('error ' + e)
        }
    }

    useEffect(() => {permission()})

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            backButtonClick()
            return true
        }) 
        return () =>
        BackHandler.removeEventListener("hardwareBackPress", () => {});
    },[])

    function backButtonClick() {
        BackHandler.exitApp()
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={'#fff'}/>
            <ScrollView>
                <Text style={styles.textInfo}>App to study Realm.db on React-native</Text>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.buttonTrack} onPress={() => {navigation.navigate('Create')}}>
                        <Text style={styles.buttonTextTrack}>Create objects</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTrack} onPress={() => {navigation.navigate('List')}}>
                        <Text style={styles.buttonTextTrack}>List objects</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonTrack} onPress={() => {navigation.navigate('Modify')}}>
                        <Text style={styles.buttonTextTrack}>Modify objects</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    ) 
}

export  default Home