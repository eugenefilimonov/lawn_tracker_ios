import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Button, Text } from 'react-native';
import { fetchProperty } from '../store/modules/property';
import { userLogout } from '../store/modules/application';
import SplashScreen from './SplashScreen';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

class LoggedIn extends Component {
  componentDidMount() {
    this.props.fetchProperty();
  }

  render() {
    console.log(this.props)
    if (this.props.loading) {
      return <SplashScreen />
    }

    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
};

const mapStateToProps = state => ({
  loading: state.property.loading,
  property: {
    address: state.property.address,
    zones: state.property.zones
  }
});

const mapDispatchToProps = {
  userLogout,
  fetchProperty
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
