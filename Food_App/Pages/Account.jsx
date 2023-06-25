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
    },
    item: {
      backgroundColor: '#007bff',
      padding: 10,
      margin: 5,
      borderRadius: 5,
    }, logout: {
        backgroundColor: '#ff0000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      }
});



function Account() {
    const test_username = "Bruce"
    const test_userpassword = "06252023"
    const recentlyView = ["Bambo Gardan", "Panda House", "Korean BBQ"]


    function Authenticate(userpassword, password) {
        return userpassword === password
    }

    function Logout() {

    }

    function checkout(item){
        
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{test_username}</Text> 

            {recentlyView.map((item, index) => (
                <TouchableOpacity key = {index} style = {styles.item} onPress= {() => checkout({item})}>
                    <Text style={styles.itemText}> {item}</Text>
                </TouchableOpacity> 
            ))}
            
            <TouchableOpacity style={styles.logout} onPress={Logout}>
                <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>

        </View>

        
    )
}

export default Account