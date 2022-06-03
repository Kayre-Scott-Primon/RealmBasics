import { View, Text, ScrollView, FlatList, TouchableOpacity  } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'

export default function listDog({dogs, onPress}) {

  return (
    <View style={styles.container}>
        <ScrollView>
            <FlatList
                data={dogs}
                style={styles.flatlist}
                renderItem={({item: dog}) => (
                    <TouchableOpacity style={styles.viewItem} onPress={() => {onPress(dog)}}>
                        <Text style={styles.containerItem}>Name: {dog.name}</Text>
                        <Text style={styles.containerItem}>Breed: {dog.breed}</Text>
                        <Text style={styles.containerItem}>Age: {dog.age}</Text>
                        <Text style={styles.containerItem}>Size: {dog.size}</Text>
                        <Text style={styles.containerItem}>Color: {dog.color}</Text>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    </View>
  )
}