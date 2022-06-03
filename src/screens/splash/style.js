import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(2,50,150,1)',
        justifyContent: 'center',
        elevation: 5,
        shadowOffset: {
            height: 0,
            width: 2
        },
        shadowColor: '#fff',
        shadowRadius: 180,
        shadowOpacity: 0.9
    },
    logo:{
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 25
    }
})