import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import mainStyles from '../components/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addFavourites, removeFavourites } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const sizes = [7, 8, 9, 10, 11];

export default function ShoePage(props) {
    const [favourite, setFavourite] = useState(false); // to store state of favourite button

    const shoe = props.route.params.shoeInfo; // shoe info
    // check if item has already been favourited before
    const aldFav = useSelector(state => state.Favourites).favourites.filter(i => i === shoe.id).length > 0;

    useEffect(() => {
        setFavourite(aldFav)
    }, [])

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={mainStyles.header}>
                <Icon name="ios-arrow-round-back"
                    size={29}
                    style={{ marginRight: 20 }}
                    onPress={() => props.navigation.goBack()}
                />
                <Text style={mainStyles.headerText}>{shoe.brand}</Text>
                <Icon name="ios-heart" color={favourite ? 'red' : 'grey'} size={29}
                    style={{ marginLeft: 'auto' }}
                    onPress={() => {
                        favourite ? dispatch(removeFavourites(shoe.id)) : dispatch(addFavourites(shoe.id));
                        setFavourite(!favourite);
                    }} />
            </View>

            <View style={styles.imageContainer}>
                <Image source={shoe.image} style={styles.image} />
            </View>

            <View style={styles.container}>
                <Text style={mainStyles.headerText}>{shoe.name}</Text>
                <Text style={styles.text}>{shoe.price}</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.sizeTitle}>Sizes</Text>
                <View style={{ flexDirection: 'row' }}>
                    {
                        sizes.map((size, i) => {
                            return (
                                <TouchableOpacity style={styles.button} key={i}
                                    onPress={() => { return alert('Added to cart') }}>
                                    <Button title={size.toString()} color="grey" />
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: "80%",
        height: 170
    },
    container: {
        marginTop: 20,
        paddingHorizontal: 15
    },
    text: {
        fontSize: 20
    },
    sizeTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        marginRight: 5,
        width: 40,
        height: 40
    }
});