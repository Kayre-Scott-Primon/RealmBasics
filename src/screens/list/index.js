import { View, Text, TextInput, TouchableOpacity, ToastAndroid, FlatList  } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import CatView from '../../components/viewCat'
import DogView from '../../components/viewDog'


export default function List() {

    const [ animal, setAnimal ] = useState('dog')

    function renderView() {
        switch (animal) {
            case 'dog':
                return <DogView/>
                break

            case 'cat':
                return <CatView/>
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
        {renderView()}
    </View>
  )
}