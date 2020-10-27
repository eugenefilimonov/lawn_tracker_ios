import React, { Component } from 'react';
import { Dimensions, StatusBar, SafeAreaView, StyleSheet, View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-elements';
import { LineChart } from "react-native-chart-kit";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory-native";
const Stack = createStackNavigator();

export default Dashboard = (props) => {
  const data = Object.keys(props.property.growth_potential).map((key) => {
    return {x: key, y: props.property.growth_potential[key]}
  }).filter((obj) => {
    if (obj.x === 'id' || obj.x === 'property_id') {
      return false
    }
    return true
  })

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={{marginTop: 20 }}>
        <Card containerStyle={{marginBottom: 20}} >
          <Card.Title>Growth Potential (%)</Card.Title>
          <Card.Divider/>
          <VictoryChart
            theme={VictoryTheme.material}
          >
            <VictoryLine
              style={{
                data: { stroke: "green" },
              }}
              data={data}
            />
          </VictoryChart>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
