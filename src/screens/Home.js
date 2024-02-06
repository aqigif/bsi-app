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
    </View>
  );
};

export default HomeScreen;



