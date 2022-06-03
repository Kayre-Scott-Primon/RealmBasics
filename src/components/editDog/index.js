import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import getRealm from '../../store/realm'


export default function EditDog({dog, close}) {
    
    const [ age, setAge ] = useState(dog.age)
    const [ size, setSize ] = useState(dog.size)
    const [ color, setColor ] = useState(dog.color)

    useEffect(() => {
        console.log('edit dog')
    },[])

    async function editDog(){
        close(false)
        const realm = await getRealm()
        const obj = await realm.objects('dog').filtered(`name == "${dog.name}"`)
        realm.write(() => {
            obj[0].age = age
            obj[0].size = size
            obj[0].color = color
        })
    }

  return (
    <View style={styles.containerModalEdit}>
        <Text style={styles.labelEdit}>Edit {dog.name}</Text>
        <View style={styles.fieldEditContainer}>  
            <Text style={styles.labelFieldEdit}>Age:</Text>
            <TextInput placeholder='age' style={styles.input} onChangeText={age => setAge(age)} value={age}/>
        </View> 
        <View style={styles.fieldEditContainer}>
            <Text style={styles.labelFieldEdit}>Size:</Text>
            <TextInput placeholder='size' style={styles.input} onChangeText={size => setSize(size)} value={size}/>
        </View>
        <View style={styles.fieldEditContainer}>
            <Text style={styles.labelFieldEdit}>Color:</Text>
            <TextInput placeholder='color' style={styles.input} onChangeText={color => setColor(color)} value={color}/>
        </View>
        <TouchableOpacity style={styles.buttonEditContainer} onPress={() => editDog()}>
            <Text style={styles.buttonEditLabel}>Save edit</Text>
        </TouchableOpacity>
    </View>
  )
}