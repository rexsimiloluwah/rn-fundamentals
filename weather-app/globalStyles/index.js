import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    
    container : {
        backgroundColor: '#0D1117',
        padding: 24,
        flex: 1,
        flexDirection: 'column'
    },

    card__main : {
        padding: 40,
        backgroundColor: '#161B22',
        borderRadius : 10,
        marginVertical : 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    details_card : {
        width : '48%',
        padding: 24,
        backgroundColor: '#161B22',
        borderRadius : 10,
        marginVertical : 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})