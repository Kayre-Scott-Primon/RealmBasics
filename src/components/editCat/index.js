import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import getRealm from '../../store/realm'


export default function EditCat({cat, close}) {

    const [ weight, setWeight ] = useState(cat.weight)
    const [ age, setAge ] = useState(cat.age)
    const [ color, setColor ] = useState(cat.color)

    useEffect(() => {
        console.log('edit cat')
    },[])

    async function editCat(){
        close(false)
        const realm = await getRealm()
        const obj = await realm.objects('cat').filtered(`name == "${cat.name}"`)
        realm.write(() => {
            obj[0].weight = weight
            obj[0].age = age
            obj[0].color = color
        })
    }

  return (
    <View style={styles.containerModalEdit}>
        <Text style={styles.labelEdit}>Edit {cat.name}</Text>      
        <View style={styles.fieldEditContainer}>
            <Text style={styles.labelFieldEdit}>Weight:</Text>
            <TextInput placeholder='weight' style={styles.input} onChangeText={weight => setWeight(weight)} value={weight}/>
        </View>
        <View style={styles.fieldEditContainer}>
            <Text style={styles.labelFieldEdit}>Age:</Text>
            <TextInput placeholder='age' style={styles.input} onChangeText={age => setAge(age)} value={age}/>
        </View>
        <View style={styles.fieldEditContainer}>
            <Text style={styles.labelFieldEdit}>Color:</Text>
            <TextInput placeholder='color' style={styles.input} onChangeText={color => setColor(color)} value={color}/>
        </View>
        <TouchableOpacity style={styles.buttonEditContainer} onPress={() => editCat()}>
            <Text style={styles.buttonEditLabel}>Save edit</Text>
        </TouchableOpacity>
    </View>
  )
}