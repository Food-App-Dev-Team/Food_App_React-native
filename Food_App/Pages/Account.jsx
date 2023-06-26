import React, {useState, useContext} from 'react';
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
        position: 'relative',
        marginTop: 200
      }, login: {
        position: 'relative',
        backgroundColor: '#00A400',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius:5
      }, username: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333333',
        position: 'relative',
        padding : 40
      }
});

import UserContext from "../context.js"



function Account() {
    const test_username = "Bruce"
    const test_userpassword = "06252023"
    const recentlyView = ["Bambo Gardan", "Panda House", "Korean BBQ"]
    const { login, setLogin } = useContext(UserContext);

    function Authenticate(userpassword, password) {
        return userpassword === password
    }

    function Logout() {
        setLogin(false)
    }

    function checkout(item){

    }

    function Login() {
        setLogin(true)
    }

    function changePassword(){

    }

    return (
        <View style = {styles.container}>
            {!login ? 
            <View>
                <TouchableOpacity style={styles.login} onPress={Login}>
                    <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
            </View> : <View></View>}
        
            {login ? 
            <View>
                <Text style = {styles.username}>{test_username}</Text> 

                <Text style = {styles.text}>Recently Viewed: </Text>
                {recentlyView.map((item, index) => (
                    <TouchableOpacity key = {index} style = {styles.item} onPress= {() => checkout({item})}>
                        <Text style={styles.itemText}> {item}</Text>
                    </TouchableOpacity> 
                ))}

          
                <View>
                    <TouchableOpacity style={styles.button} onPress={changePassword}>
                        <Text style={styles.buttonText}>Change your password</Text>
                    </TouchableOpacity>
                </View>
            
                <View>
                    <TouchableOpacity style={styles.logout} onPress={Logout}>
                        <Text style={styles.buttonText}>Log out</Text>
                    </TouchableOpacity>
                </View> 
            </View> : <View></View>}
            
        </View>

        
    )
}

export default Account