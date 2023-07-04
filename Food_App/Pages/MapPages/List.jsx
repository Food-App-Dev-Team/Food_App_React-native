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
    Modal,
    Button,
    TextInput,
    FlatList
  } from 'react-native';

const Item = ({name, rating, onPress}) => (
    <TouchableOpacity onPress={onPress} >
        <Text>{name}: {rating}</Text>
    </TouchableOpacity>
);

const ListOfRestaurant = ({ list }) => {
    const renderItem = ({ item }) => (
        <Item name= {item.name} rating= {item.rating} onPress = {() => {}} />
    )

    const keyExtractor = (item) => item.id;

    return (
        <FlatList
            data = {list}
            renderItem = {renderItem}
            keyExtractor={keyExtractor}
        />
    )
}

export default ListOfRestaurant
