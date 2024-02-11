 
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { increment, decrement } from '../actions/action';

const ReduxConcept = () => {
  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Counter App</Text>
      <Text style={{ fontSize: 48 }}>{counter}</Text>
      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Button title="Increment" onPress={handleIncrement} />
        <Button title="Decrement" onPress={handleDecrement} />
      </View>
    </View>
  )
};

export default ReduxConcept;
