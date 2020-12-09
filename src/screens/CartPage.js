import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import mainStyles from '../components/styles';

export default function CartPage() {
    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.header}>
                <Text style={mainStyles.headerText}>Cart</Text>
            </View>
        </SafeAreaView>
    )
}