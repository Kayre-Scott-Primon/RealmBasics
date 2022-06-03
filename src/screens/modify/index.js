import { View, Text, TextInput, TouchableOpacity, FlatList, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import Modal from 'react-native-modal';
import styles from './style'
import getRealm from '../../store/realm'
import ListDog from '../../components/listDog'
import ListCat from '../../components/listCat'
import EditDog from '../../components/editDog';
import EditCat from '../../components/editCat';


export default function CreateDog() {

    const [ name, setName ] = useState('')
    const [ animal, setAnimal ] = useState('dog')
    const [ list, setList ] = useState([])
    const [ animalSelected, setAnimalSelected ] = useState({})
    const [ modalEdit, setModalEdit ] = useState(false)

    useEffect(() => {
        setList([])
    },[animal])

    useEffect(() => {
        !modalEdit && searchAnimal()
    },[modalEdit])


    async function searchAnimal() {
        const realm = await getRealm()
        if(name != ''){
            const obj = await realm.objects(animal).filtered(`name == "${name}"`)
            setList(obj)
        }else{
            const obj = await realm.objects(animal)
            setList(obj)
        }
        Keyboard.dismiss()
        setName('')
    }

    function renderResults(){
        switch (animal) {
            case 'dog':
                return <ListDog dogs={list} onPress={(dog) => {selectAnimal(dog)}}/>
                break
            case 'cat':
                return <ListCat cats={list} onPress={(cat) => {selectAnimal(cat)}}/>
                break
        }
    }

    function selectAnimal(animalSelected){
        setAnimalSelected(animalSelected)
        switch (animal) {
            case 'dog':
                return setModalEdit(true)
                break
            case 'cat':
                return setModalEdit(true)
                break
        }
    }

    function renderEdit(){        
        switch (animal) {
        case 'dog':
            return <EditDog dog={animalSelected} close={(bool) => setModalEdit(bool)}/>
            break
        case 'cat':
            return <EditCat cat={animalSelected} close={(bool) => setModalEdit(bool)}/>
            break
    }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Search animal by name</Text>
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
        <TextInput placeholder='name' style={styles.input} onChangeText={name => setName(name)} value={name}/>
        <TouchableOpacity 
            style={[styles.buttonSearch]}  
            onPress={() => searchAnimal()}
            >
            <Text style={styles.buttonSearchLabel}>Search</Text>
        </TouchableOpacity>
        {renderResults()}
        <Modal isVisible={modalEdit}>
            {renderEdit()}
        </Modal>
    </View>
  )
}