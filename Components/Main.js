import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 56,
    fontWeight: 'bold',
  },
});

const Main = () => (
  <View>
    <Text style={styles.text}>Find ...</Text>
    <Text style={styles.text}>... Explore!</Text>
    <Button
      title="Mini Games"
      color="#841584"
    />
  </View>
);

export default Main;
