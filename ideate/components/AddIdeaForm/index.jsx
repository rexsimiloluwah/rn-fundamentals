import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput,TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Formik} from 'formik';
import {globalStyles} from '../../styles/globalStyles';
import * as yup from 'yup';
import Button from '../Button';

export default function AddIdeaForm(props){

    const IdeaSchema = yup.object({

        name : yup.string()
                  .required()
                   .min(3) ,
        
        description : yup.string()
                        .required()
                        .min(8)
    })
    return(

        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()} }>
        <View style = {globalStyles.container}>
            <Formik
                initialValues = {{name : '', description : ''}}
                validationSchema = {IdeaSchema}
                onSubmit = { (values, actions) => {
                    props.addIdea(values)
                    actions.resetForm()
                }}
            >
                {(props) => (
                    <View>
                        
                        <TextInput 
                        style = {[styles.input, props.touched.name && props.errors.name && styles.input_error]}
                        placeholder = "Name of your Idea i.e. A Python App"
                        onChangeText = {props.handleChange('name')}
                        value = {props.values.name}
                        />

                        <Text style = {styles.errorText}>{props.touched.name && props.errors.name}</Text>

                        <TextInput
                        multiline
                        style = {[styles.input, props.touched.description && props.errors.description && styles.input_error]}
                        placeholder = "Short description of the Idea"
                        onChangeText = {props.handleChange('description')}
                        value = {props.values.description}
                         />

                         <Text style = {styles.errorText}>{props.touched.description && props.errors.description}</Text>

                         <Button 
                         title = "Add Idea"
                         onPress = {props.handleSubmit}
                         color = '#3ee'
                         />

                    </View>
                )}

            </Formik>

        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({

    input : {
        borderWidth: 1,
        borderColor: '#eee',
        padding: 7,
        marginVertical : 10
    },

    input_error : {
        borderWidth: 1,
        borderColor: 'crimson'
    },

    errorText : {
        color: 'crimson'
    }

})