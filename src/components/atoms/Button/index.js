import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({text, color = '#0075FF', textColor = '#FFFFFF'}) => {
  return (
    <View style={styles.container(color)}>
      <Text style={styles.text(textColor)}>{text}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: color,
    padding: 12,
    borderRadius: 8,
  }),
  text: (color) => ({
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: color,
    textAlign: 'center',
  }),
});
