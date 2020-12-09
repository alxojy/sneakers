import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

// import screens
import CartPage from './src/screens/CartPage';
import FavouritePage from './src/screens/FavouritePage';
import HomePage from './src/screens/HomePage';
import ProfilePage from './src/screens/ProfilePage';
import ShoePage from './src/screens/ShoePage';

// redux
import { Provider } from 'react-redux';
import Store from './Store';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const ShoeDescription = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Shoe" component={ShoePage} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tab.Navigator
          barStyle={{ backgroundColor: '#ffff' }}>
          <Tab.Screen
            name="Home"
            component={ShoeDescription}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="ios-home" color={color} size={26} />
              ),
            }} />
          <Tab.Screen
            name="Favourites"
            component={FavouritePage}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="ios-heart" color={color} size={26} />
              ),
            }} />
          <Tab.Screen
            name="Cart"
            component={CartPage}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="ios-cart" color={color} size={26} />
              ),
            }} />
          <Tab.Screen
            name="Profile"
            component={ProfilePage}
            options={{
              tabBarIcon: ({ color }) => (
                <Icon name="ios-person" color={color} size={26} />
              ),
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
