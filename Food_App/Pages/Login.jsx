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

const Login = ({navigation}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleTextChange = (text) => {
        setUsername(text)
    }

    const Login = () => {
        const url = `http://localhost:3000/login/${username}/${password}`
        fetch(url, {
            method: 'POST',  
        })
        .then(response => response.json())
        .then(data => console.log(data))
        
    }

    return (
        <View>
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

            <TouchableOpacity style={styles.button} onPress={Login}>
                <Text >Login</Text>
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
    
  });


export default Login