import React , {useState, useEffect} from 'react';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import {
    Image,
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

const CustomCallout = ({rating, name, picture, coordinate}) => {
    const API_key = ""
    const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${picture[0].width}&photoreference=${picture[0].photo_reference}&key=${API_key}`;
    //const photoUrl ="https://lh3.googleusercontent.com/places/ANJU3DvCJlrk0D3GOweRhWXINpuCrm1tlus0KBOVyDiXVucyAYXRC4U0PAEsQ0zkRFz4_mt9OrPEV_EIAVSYW9k3juGd1PdzzLq_kts=s1600-w3024"
    //const photoUrl =`https://lh3.googleusercontent.com/places/${picture[0].photo_reference}`
    return (
        <Callout style = {{width:200, height:200}}>
            <Image source={{ uri: photoUrl }} style={{ width: 100, height: 100 }} />
            <Text>{rating} / 5</Text>
            <Text>{name}</Text>
        </Callout>
        
    )
}

export default CustomCallout