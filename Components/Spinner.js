import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#ED860A" />
        </View>
    );
};

export default Spinner;