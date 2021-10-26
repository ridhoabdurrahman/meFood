import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign In" subTitle="Find your best ever Meal !" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your Email Address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your Password" />
        <Gap height={24} />
        <Button text="Sign In" color="#0075FF" textColor="#FFFFFF" />
        <Gap height={12} />
        <Button text="Create New Account" color="#8D92A3" textColor="#FFFFFF" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {flex: 1},
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
