import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Modal,
  Button,
  TextInput,
  Animated
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import List from './List.jsx'
import Map from './Map.jsx'

import { Dimensions } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const CombinedMap = (props) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <View style={styles.container}> 
      <SafeAreaView style = {{flex : 1}}>
        <Map style={styles.theMap}/>
        <List
          scrollY={scrollY}
          style = {styles.scrollView}
        />
      </SafeAreaView>
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  theMap: {
    ...StyleSheet.absoluteFillObject, // Fill the entire container
    zIndex: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 900,
  },
  scrollView: {
    height: 10,
    zIndex: 1, // Place the ScrollView on top of the Map
  },
})

export default CombinedMap;
