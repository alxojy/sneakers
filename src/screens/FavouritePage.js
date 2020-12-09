import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import mainStyles from '../components/styles';
import { useSelector } from 'react-redux';
import { shoes } from './HomePage';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export default function FavouritePage(props) {
    const favourites = useSelector(state => state.Favourites).favourites;
    console.log(favourites)
    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.header}>
                <Text style={mainStyles.headerText}>Favourites</Text>
            </View>
            <ScrollView style={styles.container}>
                {
                    favourites.length === 0 ?
                        <Text style={styles.nothingText}>There's nothing here...</Text> :
                        favourites.map((fav, id) => {
                            return (
                                <TouchableOpacity style={styles.favContainer} key={id}>
                                    <Text style={styles.shoeTitle} key={id}>
                                        {shoes[fav].name}
                                    </Text>
                                    <View style={styles.imageContainer}>
                                        <Image source={shoes[fav].image} style={styles.image} />
                                    </View>
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
        marginTop: 20,
        paddingHorizontal: 15
    },
    nothingText: {
        fontSize: 20
    },
    shoeTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    favContainer: {
        borderRadius: 20,
        backgroundColor: 'rgb(228, 228, 228)',
        padding: 15,
        marginBottom: 10
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: "90%",
        height: 170
    }
})