import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function Home(){

    return(
        <View style = {globalStyles.container}>
            <Text style = {globalStyles.boldText}>About IDEATE page</Text>
            <View style = {globalStyles.panel}>
                <Text>IDEATE is a simple capstone project built using React-native for easily storing Ideas.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
})
