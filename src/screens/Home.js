import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {id: '1234jkfhbsajkhdjsak'})}
      />
      <Button
        title="Go to One"
        onPress={() => navigation.navigate('One')}
      />
      <Button
        title="Go to Sync"
        onPress={() => navigation.navigate('Synchronous')}
      />
      <Button
        title="Go to Async"
        onPress={() => navigation.navigate('Asynchronous')}
      />
      <Button
        title="Go to Promise"
        onPress={() => navigation.navigate('Asynchronous')}
      />
    </View>
  );
};

export default HomeScreen;



