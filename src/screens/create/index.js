import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import CreateDog from '../../components/dog'
import CreateCat from '../../components/cat'


export default function Create() {

    const [ animal, setAnimal ] = useState('dog')
    
    function renderType(){
        switch (animal) {
            case 'dog':
                return <CreateDog/>
                break

            case 'cat':
                return <CreateCat/>
                break
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.view}>
            <TouchableOpacity 
                style={[styles.button, animal == 'dog' && {backgroundColor: 'rgba(255,100,0,1)'}]} 
                onPress={() => setAnimal('dog')}>
                <Text style={styles.buttonLabel}>Dog</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.button, animal == 'cat' && {backgroundColor: 'rgba(255,100,0,1)'}]} 
                onPress={() => setAnimal('cat')}>
                <Text style={styles.buttonLabel}>Cat</Text>
            </TouchableOpacity>
        </View>
        {renderType()}
    </View>
  )
}