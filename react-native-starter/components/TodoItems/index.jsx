import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function TodoItems(props){
    return(

            <FlatList 
                keyExtractor = {item => item.name}
                data = {props.todos}
                renderItem = { ({item}) => (
                <TouchableOpacity onPress = {() => props.handleDeleteTodo(item)}>
                    <View style = {styles.todoContainer}>
                    <View style = {styles.todoname}>
                        <AntDesign name="delete" size={18} color="black" />
                        <Text>{item.name}</Text>
                    </View>
                    <Text style = {styles.todoPriority}>{item.priority}</Text>

                    </View>
                </TouchableOpacity>
                )}
            />
    )
}

const styles = StyleSheet.create({
    boldText : {
        fontWeight: 'bold'
    },
    
    todoContainer : {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        backgroundColor: 'pink',
        borderRadius: 10,
        margin: 10,
    },
    
    todoPriority : {
        color: 'crimson'
    },

    todoname: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between'
    }
})