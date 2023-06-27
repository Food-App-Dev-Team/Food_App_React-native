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

    function Register_user(){
        const url = `http://localhost:3000/insertUser/${username}/${password}/${birthday}/${email}`

        fetch(url, {
            method: 'POST',  
        })
        .then(response => response.json())
        .then(result => {
          console.log(`Result is : ${result.insertedId}`);
        })
        .catch(error => {
          console.error(error);
        });

        navigation.goBack();
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
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
    }
  });

export default Register
