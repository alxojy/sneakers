import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import mainStyles from '../components/styles';

// data for shoes in the home page
export const shoes = [
    {
        id: 0,
        name: 'Air Max 270',
        brand: 'Nike',
        price: '$ 129.99',
        image: require('../../assets/sneakers/air1.png'),
        color: '#ff4444',
    },
    {
        id: 1,
        name: 'Air Max 99',
        brand: 'Nike',
        price: '$ 99.99',
        image: require('../../assets/sneakers/air2.png'),
        color: '#0d47a1',
    },
    {
        id: 2,
        name: 'Air Max Pro',
        brand: 'Nike',
        price: '$ 149.99',
        image: require('../../assets/sneakers/air3.png'),
        color: '#33b5e5',
    },
    {
        id: 3,
        name: 'Air Max Plus',
        brand: 'Nike',
        price: '$ 129.99',
        image: require('../../assets/sneakers/air4.png'),
        color: '#ffbb33',
    },
];

export default function HomePage(props) {
    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.header}>
                <Text style={mainStyles.headerText}>Home</Text>
            </View>
            <View>
                <ScrollView horizontal={true}>
                    {
                        shoes.map((shoe, i) => {
                            return (
                                <TouchableOpacity onPress={() => props.navigation.navigate("Shoe", { shoeInfo: shoe })} key={i}>
                                    <View style={styles.featuredCard} key={i}>
                                        <Text style={styles.shoeTitle}>
                                            {shoe.name}
                                        </Text>
                                        <Text style={styles.shoePrice}>{shoe.price}</Text>
                                        <Image source={shoe.image} style={styles.image} />
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    }
                </ScrollView>
            </View>
            <View style={mainStyles.header}>
                <Text style={mainStyles.headerText}>More</Text>
            </View>

            <View style={styles.promoContainer}>
                <Image source={require('../../assets/sneakers/promo.jpg')} style={styles.promo} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    featuredCard: {
        backgroundColor: 'red',
        height: 220,
        width: 160,
        borderRadius: 22,
        marginHorizontal: 10
    },
    shoeTitle: {
        marginLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    shoePrice: {
        marginLeft: 10,
        marginTop: 2,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'
    },
    image: {
        marginTop: 20,
        height: '50%',
        width: '110%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        transform: [{ rotate: '-25deg' }],
    },
    promoContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    promo: {
        width: "95%",
        height: 210,
        borderRadius: 22
    }
});