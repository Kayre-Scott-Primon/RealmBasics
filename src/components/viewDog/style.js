import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        width: '90%'
    },  
    title: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '800',
        alignSelf: 'center'
    },
    viewItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1.2,
        borderColor: '#000',
        width: '100%',
        marginVertical: 5,
        padding: 10
    },
    containerItem: {
        fontSize: 18,
        color: '#000',       
    },
    flatlist: {
        marginBottom: 70
    },
    divider: {
        height: 1,
        width: '95%',
        backgroundColor: '#666',
        marginBottom: 8
    },

})