import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import OneScreen from './screens/One';
import SynchronousScreen from "./screens/Synchronous";
import AsynchronousScreen from "./screens/Asynchronous";
import AsyncAwaitPromiseExample from "./screens/AsyncAwait";
import CallbackPromiseExample from "./screens/Callback";

const Stack = createStackNavigator();

const AppSrc = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" options={{headerTitle: 'Ini Detail'}} component={DetailsScreen} />
        <Stack.Screen name="One" options={{headerShown: false}} component={OneScreen} />
        <Stack.Screen name="Synchronous" options={{}} component={SynchronousScreen} />
        <Stack.Screen name="Asynchronous" options={{}} component={AsynchronousScreen} />
        <Stack.Screen name="AsyncAwait" options={{}} component={AsyncAwaitPromiseExample} />
        <Stack.Screen name="Callback" options={{}} component={CallbackPromiseExample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppSrc;
