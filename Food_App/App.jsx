import 'react-native-gesture-handler';
import React, {createContext, useState} from 'react';
import type {PropsWithChildren} from 'react';
import Account from "./Pages/Account.jsx"
import Explore from "./Pages/Explore.jsx"
import Friends from "./Pages/Friends.jsx"
import Map_Page from "./Pages/MapPages/Map.jsx"
import Post from "./Pages/Post.jsx"
import Register from './Pages/Register'
import ListofRestaurant from './Pages/MapPages/List.jsx'
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import UserContextProvider from "./contextProvider.js"

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tab_Navi() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Map" component={Map_Page} />
      <Tab.Screen name="Post" component={Post} />
    </Tab.Navigator>
  )
}

function App() {
  
    return (
       <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Tab.Navigator>
                <Tab.Screen name="Account" component={AccountStack} />
                <Tab.Screen name="Explore" component={Explore} />
                <Tab.Screen name="Friends" component={Friends} />
                <Tab.Screen name="Map" component={Map_Page} />
                <Tab.Screen name="Post" component={Post} />
            </Tab.Navigator> */}
            <Stack.Screen name = "Back" component= {Tab_Navi} options={{ headerShown: false }}/>
            <Stack.Screen name="Register" component={Register}  />
          </Stack.Navigator>
        </NavigationContainer>
       </UserContextProvider>
    )
    
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App