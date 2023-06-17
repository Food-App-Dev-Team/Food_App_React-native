import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

function Base() {
    const onPressHandler1 = () => {

    }
    
    return (
        <View>
            <TouchableOpacity onPress={onPressHandler1}>
                <View style={{ backgroundColor: 'blue', padding: 10 }}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Press Me</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}