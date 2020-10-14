import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { fetchProperty } from '../store/modules/property';
import { userLogout } from '../store/modules/application';
import SplashScreen from './SplashScreen';
import PayScreenModal from '../components/modal';
import Dashboard from './Dashboard';
import Settings from './Setting';

const PayScreenComponent = () => { return null };

const Tab = createBottomTabNavigator();

class LoggedIn extends Component {
  componentDidMount() {
    this.props.fetchProperty();
  }

  render() {
    if (this.props.loading) {
      return <SplashScreen />
    }
    return (
        <NavigationContainer>
          <Tab.Navigator initialRouteName='Settings'>
            <Tab.Screen
              name="Dashboard"
              options={{
                tabBarLabel: 'Dashboard',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons width={28} height={28} name="view-dashboard" color={color} size={size} />
                ),
              }}
            >
              {(props) => <Dashboard {...props} /> }
            </Tab.Screen>
            <Tab.Screen
              name="Add"
              component={PayScreenComponent}
              options={{
                tabBarLabel: '',
                tabBarIcon: () => (
                  <PayScreenModal />
                )
              }}
            />
            <Tab.Screen
              name="Settings"
              options={{
                tabBarLabel: 'Settings',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons width={28} height={28} name="cog" color={color} size={size} />
                ),
              }}
            >
              {(props) => <SettingsScreen {...props} property={this.props.property} userLogout={this.props.userLogout}/>}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
    )
  }
}

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
