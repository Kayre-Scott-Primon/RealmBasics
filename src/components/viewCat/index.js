import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'
import getRealm from '../../store/realm'


export default function CatView() {

    const [ cats, setCats ] = useState([])

    useEffect(() => {
        readRealmCat()
    },[])

    async function readRealmCat(){
        const realm = await getRealm()
        const cats = await realm.objects('cat')
        console.log('cats', cats.length)
        setCats(cats)
    }


  return (
    <View style={styles.container}>
        <ScrollView>
            <Text style={styles.title}>List realm Cats</Text>
            <View style={styles.containerShow}>
                <FlatList
                    data={cats}
                    style={styles.flatlist}
                    renderItem={({item: cat}) => (
                        <View style={styles.viewItem}>
                            <Text style={styles.containerItem}>Name: {cat.name}</Text>
                            <Text style={styles.containerItem}>Weight: {cat.weight}</Text>
                            <Text style={styles.containerItem}>Age: {cat.age}</Text>
                            <Text style={styles.containerItem}>Color: {cat.color}</Text>
                            <Text style={styles.containerItem}>Sex: {cat.male == true ? 'Male' : 'Famale'}</Text>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    </View>
  )
}