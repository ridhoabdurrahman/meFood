import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={{height: 37}} />
      <Text style={styles.textTitle}>Naya Food</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0075FF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: '#FFFFFF',
    fontSize: 32,
  },
});
