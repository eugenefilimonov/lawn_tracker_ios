import React, { Component } from 'react';
import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default Dashboard = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
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
