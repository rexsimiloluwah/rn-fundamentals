/**
 * @author [Similoluwa Okunowo (The Caveman)]
 * @email [rexsimiloluwa@gmail.com]
 * @create date 2020-12-30 00:15:37
 * @modify date 2020-12-30 01:23:40
 * @desc [description]
 */
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet,View, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/Header';
import TodoItems from './components/TodoItems';
import TodoForm from './components/TodoForm';
import FlexBox from './components/FlexBox';

export default function App() {

  const [temperature, setTemperature] = useState(27);
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);

  const [products, setProducts] = useState([
    {name : "DELL Alienware", price : 1200},
    {name : "Macbook 2020 PRO", price : 950},
    {name : "Nvidia RTX GPU", price : 1000},
    {name : "Apple Airpods 2020", price : 550},
    {name : "Oraimo Headphones", price : 135},
    {name : "Apple Iphone 12", price : 640},
    {name : "Aurora Red Wine", price : 100},
    {name : "Mustang Ferarri", price : 140000}
  ])

  const [todos, setTodos] = useState([
    {name : "Complete React Native series", priority : "High"},
    {name : "Begin Udacity Bertelsman AI course", priority : "Normal"},
    {name : "Finish Wonder woman movie", priority : "Low"},
    {name : "Text my professor", priority : "Low"}
  ])

  const increment = () => {
    setTemperature(temperature + 1)
  }

  const decrement = () => {
    setTemperature(temperature - 1)
  }

  const pressHandler = (item) => {
    console.log(item)
    setProducts(() => {
      return products.filter(product => product.name != item.name)
    })
  }

  const handleAddTodo = (name, priority) => {
    if(!name || !priority){
      Alert.alert(
        "OOPS !", "Kindly fill the required fields.", [
          {text : 'Okay', onPress : () => {console.log("Alert closed")}}
        ]
      )
    }

    else if(name.length < 3){
      Alert.alert(
        "OOPS !", "Todo name must be more than 3 characters.", [
          {text : 'Okay', onPress : () => {console.log("Alert closed")}}
        ]
      )
    }
    else{
      let todo = {name : name, priority : priority}
      console.log(todo)
      setTodos( (prevTodos) => (
        [
          todo,
          ...prevTodos
        ]
      ))
    }
    
  }
  const handleDeleteTodo = (item) => {
    console.log(item)
    setTodos(() => {
      return todos.filter(todo => todo.name !== item.name)
    })
  }

  return (
    <TouchableWithoutFeedback
      onPress = {() => {
        Keyboard.dismiss()
      }}
    >
      {/* <Text>React Native Starter.</Text>
      <View style = {styles.main}>
        <Text>Hello World !</Text>
      </View>
      <Text style = {styles.boldText}>Similoluwa Okunowo</Text> */}
      {/* <View style = {styles.header} >
        <Text style = {styles.tempValue}>{temperature} oC</Text>
      </View>
      <View style = {styles.buttonsContainer}>
        <Button title = 'Increment (+)' onPress = {increment} />
        <Button title = 'Decrement (-)' onPress = {decrement} />
      </View>

      <View style = {styles.inputsContainer}>
        <TextInput 
          style = {styles.input}
          placeholder = 'Enter your name i.e Buhari'
          onChangeText = { (val) => {setName(val)}}
        />

        <Text>Name :- {name} </Text>

        <TextInput 
          keyboardType = 'number-pad'
          style = {styles.input}
          placeholder = 'Enter your age'
          onChangeText = { (val) => {setAge(val)}}
        />

        <Text>Age :- {age} </Text>
      </View> */}

      {/* <ScrollView>
        {
          products.map( (product, id) => (
            <View style = {styles.productContainer} id = {id}>
              <Text style = {styles.boldText} id = {id}>{product.name}</Text>
              <Text style = {styles.priceText} id = {id}>${product.price}</Text>
            </View>
          ))
        }
      </ScrollView> */}

      {/* <FlatList 
        keyExtractor = {(item) => item.name}
        // numColumns = {2}
        data = {products}
        renderItem = { ({item}) => (
          <TouchableOpacity onPress = {() => pressHandler(item)}>
            <View style = {styles.productContainer}>
            <Text style = {styles.boldText} id = {id}>{item.name}</Text>
            <Text style = {styles.priceText} id = {id}>${item.price}</Text>
          </View>
          </TouchableOpacity>
          
        )}
      /> */}

      {/* Building a Todo app */}
      <View  style = {styles.container}>
      {/* Header */}
      <Header headerText = "Todo app" />
      <View style = {styles.content}>
        <TodoForm addTodo = {handleAddTodo} />
        <View style = {styles.todolist}>
          <TodoItems todos = {todos} handleDeleteTodo = {handleDeleteTodo} />
        </View>
        <StatusBar style="auto" />
      </View>
      </View>
    </TouchableWithoutFeedback>

    // <Flexbox />
  );
}

const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  main: {
    color: '#fff',
    backgroundColor: 'pink',
    margin: 10,
    padding: 10,
    borderRadius: 10
  },

  tempValue : {
    fontSize: 34,
    fontWeight: 'bold'
  },

  buttonsContainer : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
  },

  input : {
    borderWidth: 1,
    padding: 8,
    borderColor: '#444',
    margin: 10
  },
  
  productContainer : {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 10,
    margin: 10,
  },

  priceText : {
    color: '#fff'
  },

  content : {
    flex: 1,
  },

  todolist : {
    flex: 1
  }

});
