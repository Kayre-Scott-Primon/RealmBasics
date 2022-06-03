import { View, Text, ScrollView, FlatList  } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import getRealm from '../../store/realm'


export default function DogView() {

    const [ dogs, setDogs ] = useState([])

    useEffect(() => {
        readRealmDog()
    },[])

    async function readRealmDog(){
        const realm = await getRealm()
        const dogs = await realm.objects('dog')
        console.log('dog', dogs.length)
        setDogs(dogs)
    }

  return (
    <View style={styles.container}>
        <ScrollView>
            <Text style={styles.title}>List realm Dogs</Text>
            <View style={styles.containerShow}>
                <FlatList
                    data={dogs}
                    style={styles.flatlist}
                    renderItem={({item: dog}) => (
                        <View style={styles.viewItem}>
                            <Text style={styles.containerItem}>Name: {dog.name}</Text>
                            <Text style={styles.containerItem}>Breed: {dog.breed}</Text>
                            <Text style={styles.containerItem}>Age: {dog.age}</Text>
                            <Text style={styles.containerItem}>Size: {dog.size}</Text>
                            <Text style={styles.containerItem}>Color: {dog.color}</Text>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    </View>
  )
}