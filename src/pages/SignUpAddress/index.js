import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const index = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Address"
        subTitle="Make sure it's Valid"
        onBack={() => {}}
      />
      <View style={styles.container}>
        <TextInput label="Phone No." placeholder="Type your Phone Number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your Address" />
        <Gap height={16} />
        <TextInput label="House No." placeholder="Type your Houser Number" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={24} />
        <Button
          text="Sign Up Now"
          color="#0075FF"
          textColor="#FFFFFF"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default index;

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
