import * as React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from "../Pages/Account.jsx"
import Explore from "../Pages/Explore.jsx"
import Friends from "../Pages/Friends.jsx"
import Map_Page from "../Pages/MapPages/Map.jsx"
import Post from "../Pages/Post.jsx"
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

export default Base