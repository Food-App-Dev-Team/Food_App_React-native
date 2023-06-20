import React from 'react';
import type {PropsWithChildren} from 'react';
import Account from "./Pages/Account.jsx"
import Explore from "./Pages/Explore.jsx"
import Friends from "./Pages/Friends.jsx"
import Map_Page from "./Pages/Map.jsx"
import Post from "./Pages/Post.jsx"
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

const App = () => {
  return (
    <View style={styles.container}>
      <Base />
    </View>
  );
}

import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function Base() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Account" component={Account} />
                <Tab.Screen name="Explore" component={Explore} />
                <Tab.Screen name="Friends" component={Friends} />
                <Tab.Screen name="Map" component={Map_Page} />
                <Tab.Screen name="Post" component={Post} />
            </Tab.Navigator>
        </NavigationContainer>
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

export default Base