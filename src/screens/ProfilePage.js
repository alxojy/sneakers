import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import mainStyles from '../components/styles';

const components = ['My Details', 'My Purchases', 'Buy Again'];

export default function ProfilePage() {
    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.header}>
                <Text style={mainStyles.headerText}>Profile</Text>
            </View>

            <View style={styles.container}>
                <Image source={require('../../assets/icon.png')} style={styles.image} />
                <Text style={styles.profileName}>John Doe</Text>
            </View>

            <ScrollView>
                {
                    components.map((component, id) => {
                        return (
                            <TouchableOpacity key={id} style={styles.componentContainer}>
                                <Text style={styles.componentText}>{component}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    image: {
        borderColor: 'black',
        width: 80,
        height: 80,
        borderWidth: 1,
        borderRadius: 50,
        marginBottom: 10
    },
    profileName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    scrollContainer: {
        paddingHorizontal: 15,
        marginBottom: 20
    },
    componentContainer: {
        borderRadius: 5,
        backgroundColor: 'rgb(228, 228, 228)',
        padding: 15,
        marginBottom: 10,
        marginHorizontal: 10
    },
    componentText: {
        fontSize: 15
    }
})