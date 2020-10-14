import React, { Component } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Button } from 'react-native';
import { PropertyInformation } from '../components/property';

export default SettingsScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <PropertyInformation property={props.property}/>
      <Button title='Logout' onPress={props.userLogout} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
