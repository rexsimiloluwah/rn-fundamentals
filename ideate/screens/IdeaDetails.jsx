import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Card from '../components/Card';
import {MaterialIcons} from '@expo/vector-icons';


export default function IdeaDetails(props){

    return(
        <View style = {globalStyles.container}>
            <Card>
                <View>
                    <View style = {styles.header}>
                        <Text style = {globalStyles.boldText}>{props.navigation.getParam('item').name}</Text>
                        <MaterialIcons name = "delete" size = {24} color= 'crimson' onPress = {props.navigation.getParam('delete')} />
                    </View>
                    <Text style = {globalStyles.paragraph}>{props.navigation.getParam('item').description}</Text>
                    <Text style = {globalStyles.smallText}>{props.navigation.getParam('item').timestamp}</Text>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({

    header : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
})
