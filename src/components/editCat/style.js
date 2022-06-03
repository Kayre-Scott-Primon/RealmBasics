import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0,100,255,1)',
        paddingVertical: 10,
        alignItems: 'center',
    },
    buttonSearch: {
        borderRadius: 8,
        backgroundColor: 'rgba(255,100,0,1)',
        borderColor: '#000',
        borderWidth: 1.5
    },
    buttonSearchLabel: {
        fontSize: 18,
        color: '#fff',
        margin: 10,
        fontWeight: '700'

    },
    title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '800',
        marginBottom: 15
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
    view: {
        flexDirection: 'row',
        backgroundColor: '#666',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        marginBottom: 10
    },
    button: {
        borderRadius: 8,
    },
    buttonLabel: {
        fontSize: 18,
        color: '#fff',
        margin: 10
    },
    viewItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1.2,
        borderColor: '#000',
        width: '100%',
        marginVertical: 5,
        padding: 10,
    },
    containerItem: {
        fontSize: 18,
        color: '#000',       
    },
    flatlist: {
        marginBottom: 500
    },
    containerModalEdit: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1.2,
        borderColor: '#000',
        padding: 10,
        alignItems: 'center'
    },
    buttonEditContainer: {
        backgroundColor: 'rgba(255,100,0,1)',
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1.2,
        width: '50%',
        alignItems: 'center'
    },
    buttonEditLabel: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'
    },
    labelEdit: {
        fontSize: 20,
        color: '#000',
        marginBottom: 10
    },
    fieldEditContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelFieldEdit: {
        color: '#000',
        marginRight: 5,
        fontSize: 20
    }
})