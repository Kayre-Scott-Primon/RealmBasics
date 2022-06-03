import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: 'rgba(0,100,255,1)',
        paddingVertical: 10,
        alignItems: 'center',
        paddingTop: 20
    },
    view: {
        flexDirection: 'row',
        backgroundColor: '#666',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginBottom: 15
    },
    button: {
        borderRadius: 8,
    },
    buttonLabel: {
        fontSize: 18,
        color: '#fff',
        margin: 10

    }
})