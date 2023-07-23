import React, {useState, useContext} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    TextInput
  } from 'react-native';

import { useNavigation } from '@react-navigation/native';

function Register({navigation}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")
    const [email, setEmail] = useState("")
    const [exist, setExist] = useState(false)
    const [success, setSuccess] = useState(false)

    function Register_user(){
        const url = `http://localhost:3000/insertUser/${username}/${password}/${birthday}/${email}`
        fetch(url, {
            method: 'POST',  
        })
        .then(response => response.json())
        .then(data => {
          console.log(data); 
          if(data === "Username already exist"){
            console.log("here")
            setExist(true)
            console.log(exist)
          } else {
            if(data.insertedID !== null){
              setSuccess(true)
            }
            setExist(false)
          }
        })
        // .then(() => {
        //   console.log(exist)
        //   if(exist){
        //     console.log(exist)
        //   } else {
        //     navigation.goBack();
        //   }
        //   })
        .catch(error => {
          console.error(error);
        })
        
    }

    const handleTextChange = (text) => {
      setUsername(text)
      setExist(false)
      setSuccess(false)
      console.log("change")
    }

    return (
        <View>
            {exist ? <Text style = {styles.alreadyExist}>The User Name You Input Already Exist</Text> : <Text></Text>}
            {success && <Text>Successfully Registered</Text>}
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={handleTextChange}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Birthday"
                value={birthday}
                onChangeText={setBirthday}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity style={styles.button} onPress={Register_user}>
                <Text >Register User</Text>
            </TouchableOpacity>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
    button: {
      backgroundColor: '#4287f5',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    }, 
    alreadyExist: {
      color: 'red',
      fontSize: 16,
    }
  });

export default Register
