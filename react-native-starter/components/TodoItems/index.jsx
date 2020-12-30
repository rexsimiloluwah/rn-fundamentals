import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

export default function TodoItems(props){
    return(

            <FlatList 
                keyExtractor = {item => item.name}
                data = {props.todos}
                renderItem = { ({item}) => (
                <TouchableOpacity onPress = {() => props.handleDeleteTodo(item)}>
                    <View style = {styles.todoContainer}>
                        <Text style = {styles.boldText}>{item.name}</Text>
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
    }
})