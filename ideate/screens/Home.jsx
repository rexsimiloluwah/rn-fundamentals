import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity,Modal, Alert} from 'react-native';
import {globalStyles} from '../styles/globalStyles';
import Card from '../components/Card';
import {MaterialIcons} from '@expo/vector-icons';
import AddIdeaForm from '../components/AddIdeaForm';

export default function Home(props){

    const [ideas, setIdeas] = useState([
        {name : 'Django Web Scraper', description : 'Build a Web Scraper using Python (Django) and Celery for automating the scraping at scheduled periods.', timestamp : (new Date).toDateString()},
        {name : 'Computer Vision App', description : 'Build a Computer Vision Based app using background and fore-ground image segmentation to convert image backgrounds to transparent or custom background images', timestamp : (new Date).toDateString()},
        {name : 'IoT Home Automation', description : 'IoT app for Home automation using Voice recognition and other commmunciation mechanisms.', timestamp : (new Date).toDateString()}
    ])

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    const addIdea = (idea) => {

        idea.timestamp = (new Date).toDateString()
        setIdeas( (currentIdeas) => {
            return [idea, ...currentIdeas]
        })

        Alert.alert(
            "Idea added successfully !",
            "Let's add more ideas.",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
        )
        console.log("submitted idea.")
    }

    const ideasObj = ideas.map((item, id) => (
        {
            id : id,
            ...item
        }
    ))

    const deleteItem = (item) => {
        setIdeas( () => {
            return ideas.filter( idea => idea.name !== item.name)
        })

        Alert.alert(
            "Idea deleted successfully",
            "Let's add more Ideas",
            [
                {text : "OK", onPress : () => props.navigation.navigate("Home")}
            ]
        )
    }

    const goToDetails = () => {
        props.navigation.navigate('IdeaDetails');
        // props.navigation.push('IdeaDetails');
    }

    return(
        <View style = {globalStyles.container}>
                <Modal visible = {isOpen} animationType = "slide">
                    <MaterialIcons name = "close" size = {24} style = {styles.modalToggle} onPress = {toggleModal} />
                    <AddIdeaForm addIdea = {addIdea}/>
                </Modal>
            

            <MaterialIcons name = "add" size = {24} style = {styles.modalToggle} onPress = {toggleModal} />

            <FlatList 
                data = {ideas}
                keyExtractor = {item => item.name.toString()}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress = {() => props.navigation.navigate('IdeaDetails', {'item' : item, 'delete' : () => deleteItem(item) })}>
                        <Card>
                            <Text style = {globalStyles.boldText}>{item.name}</Text>
                            <Text>{item.timestamp}</Text>
                        </Card>
                    </TouchableOpacity>
                )}

            />
        </View>
    )
}

const styles = StyleSheet.create({

    modalToggle : {
        marginVertical : 10,
        padding: 10,
        alignSelf : 'center',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowColor: '#eee',
        borderColor: '#eee',
        shadowOpacity: 2,
        shadowRadius: 1,

        elevation: 2,
    }
})
