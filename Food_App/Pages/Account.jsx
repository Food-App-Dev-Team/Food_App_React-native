import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity
  } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333333',
    },
    button: {
      backgroundColor: '#4287f5',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
      fontWeight: 'bold',
    }
});



function Account() {
    const test_username = "Bruce"
    const test_userpassword = "06252023"


    function Authenticate(userpassword, password) {
        return userpassword === password
    }

    function Logout() {

    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}></Text> 
            <TouchableOpacity style={styles.button} onPress={Logout}>
                <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>

        </View>

        
    )
}

export default Account