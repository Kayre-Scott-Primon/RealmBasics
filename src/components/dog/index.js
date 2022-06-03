import { Text, TextInput, TouchableOpacity, ToastAndroid, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import getRealm from '../../store/realm'


export default function CreateDog() {

    const [ name, setName ] = useState('')
    const [ breed, setBreed ] = useState('')
    const [ age, setAge ] = useState('')
    const [ size, setSize ] = useState('')
    const [ color, setColor ] = useState('')
    
    function saveDog(){
        if(
            name != '' && breed != '' && age != '' && size != ''
        ){
            Keyboard.dismiss()
            create({
                name,
                breed,
                age,
                size,
                color
            })            
            ToastAndroid.show(
                `${name} has been added`,
                ToastAndroid.LONG,
            )
            setName('')
            setBreed('')
            setAge('')
            setSize('')
            setColor('')

        }else{
            ToastAndroid.show(
                "There are emptys fields. Please, complete them",
                ToastAndroid.LONG,
           )
        }
    }

    async function create(dog){
        const realm = await getRealm()
        realm.write(() => {
            realm.create('dog', dog)
        })
    }

  return (
  <>
      <Text style={styles.title}>Add Dogs on realm</Text>
      <TextInput placeholder='name' style={styles.input} onChangeText={name => setName(name)} value={name}/>
      <TextInput placeholder='breed' style={styles.input} onChangeText={breed => setBreed(breed)} value={breed}/>
      <TextInput placeholder='age' style={styles.input} onChangeText={age => setAge(age)} value={age}/>
      <TextInput placeholder='size' style={styles.input} onChangeText={size => setSize(size)} value={size}/>
      <TextInput placeholder='color' style={styles.input} onChangeText={color => setColor(color)} value={color}/>
      <TouchableOpacity 
        style={[styles.button, name == '' || breed == '' || age == '' || size == '' ? {backgroundColor: '#666'} : false]}  
        onPress={() => saveDog()}
        >
          <Text style={styles.buttonLabel}>Add</Text>
      </TouchableOpacity>
    </>
  )
}