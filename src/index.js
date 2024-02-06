import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import OneScreen from './screens/One';

const Stack = createStackNavigator();

const AppSrc = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="One" component={OneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppSrc;
