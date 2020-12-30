import React, {useState} from 'react';
import {Button, TextInput, View, Text, StyleSheet} from 'react-native';

export default function TodoForm(props){

    const [name, setName] = useState(null)
    const [priority, setPriority] = useState(null)

    return(
        <View style = {styles.todoForm}>
            <TextInput 
                style = {styles.input}
                placeholder = "Enter name of Todo"
                onChangeText = {(val) => setName(val)}
            />

            <TextInput 
                style = {styles.input}
                placeholder = "Enter Todo priority i.e [High, Normal, Low]"
                onChangeText = {(val) => setPriority(val)}
            />

            <Button onPress = {() => props.addTodo(name, priority)} title = "Add Todo" color = "crimson" />
        </View>
    )
}

const styles = StyleSheet.create({

    todoForm : {
        marginVertical : 10,
    },

    input : {
        borderWidth : 1,
        borderColor: '#c0c6c9',
        padding: 10,
        marginVertical: 5
    },

})