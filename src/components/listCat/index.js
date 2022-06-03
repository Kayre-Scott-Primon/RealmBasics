import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './style'


export default function listCat({cats, onPress}) {

  return (
    <View style={styles.container}>
        <ScrollView>
            <View style={styles.containerShow}>
                <FlatList
                    data={cats}
                    style={styles.flatlist}
                    renderItem={({item: cat}) => (
                        <TouchableOpacity style={styles.viewItem} onPress={() => {onPress(cat)}}>
                            <Text style={styles.containerItem}>Name: {cat.name}</Text>
                            <Text style={styles.containerItem}>Weight: {cat.weight}</Text>
                            <Text style={styles.containerItem}>Age: {cat.age}</Text>
                            <Text style={styles.containerItem}>Color: {cat.color}</Text>
                            <Text style={styles.containerItem}>Sex: {cat.male == true ? 'Male' : 'Famale'}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ScrollView>
    </View>
  )
}