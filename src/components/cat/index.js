import { View, Text, TextInput, TouchableOpacity, ToastAndroid, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import getRealm from '../../store/realm'


export default function CreateCat() {

    const [ name, setName ] = useState('')
    const [ weight, setWeight ] = useState('')
    const [ age, setAge ] = useState('')
    const [ male, setMale ] = useState(true)
    const [ color, setColor ] = useState('')
    
    function saveCat(){
        if(
            name != '' && weight != '' && age != '' && color != ''
        ){
            Keyboard.dismiss()
            create({
                    name,
                    age,
                    weight,
                    color,
                    male
            })            
            ToastAndroid.show(
                `${name} has been added`,
                ToastAndroid.LONG,
            )
            setName('')
            setWeight('')
            setAge('')
            setMale(true)
            setColor('')

        }else{
            ToastAndroid.show(
                "There are emptys fields. Please, complete them",
                ToastAndroid.LONG,
           )
        }
    }

    async function create(cat){
        const realm = await getRealm()
        realm.write(() => {
            realm.create('cat', cat)
        })
    }

  return (
  <>
      <Text style={styles.title}>Add Cats on realm</Text>
      <TextInput placeholder='name' style={styles.input} onChangeText={name => setName(name)} value={name}/>
      <TextInput placeholder='weight' style={styles.input} onChangeText={weight => setWeight(weight)} value={weight}/>
      <TextInput placeholder='age' style={styles.input} onChangeText={age => setAge(age)} value={age}/>
      <TextInput placeholder='color' style={styles.input} onChangeText={color => setColor(color)} value={color}/>
      <View style={styles.viewMale}>
            <TouchableOpacity 
                style={[styles.buttonMale, male == true && {backgroundColor: 'rgba(0,80,50,1)'}]} 
                onPress={() => setMale(true)}>
                <Text style={styles.buttonMaleLabel}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.buttonMale, male == false && {backgroundColor: 'rgba(100,11,200,1)'}]} 
                onPress={() => setMale(false)}>
                <Text style={styles.buttonMaleLabel}>Famale</Text>
            </TouchableOpacity>
        </View>
      <TouchableOpacity 
        style={[styles.button, name == '' || weight == '' || age == '' || color == '' ? {backgroundColor: '#666'} : false]} 
        onPress={() => saveCat()}
        >
          <Text style={styles.buttonLabel}>Add</Text>
      </TouchableOpacity>
    </>
  )
}