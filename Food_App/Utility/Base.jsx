import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import Account from "../Pages/Account"
import Explore from "../Pages/Explore"
import Friends from "../Pages/Friends"
import Map from "../Pages/Map"
import Post from "../Pages/Post"

function Base() {
    <Tab.Navigator>
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Friends" component={Friends} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Post" component={Post} />
    </Tab.Navigator>
}