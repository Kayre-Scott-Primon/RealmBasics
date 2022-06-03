import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgba(0,100,255,1)',
        paddingVertical: 10,
        alignItems: 'center',
        paddingTop: 50
    },
    title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '800',
        marginBottom: 30
    },
    input: {
        backgroundColor: '#fff',
        marginVertical: 8,
        paddingHorizontal: 15,
        paddingVertical: 2,
        borderWidth: 1.5,
        borderColor: '#000',
        borderRadius: 10,
        width: '75%'
    },
    button: {
        backgroundColor: 'rgba(255,100,0,1)',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#000',
        marginVertical: 25
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700'
    },
    viewMale: {
        flexDirection: 'row',
        backgroundColor: '#666',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginBottom: 15
    },
    buttonMale: {
        borderRadius: 8,
    },
    buttonMaleLabel: {
        fontSize: 18,
        color: '#fff',
        margin: 10

    }
})