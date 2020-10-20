import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { fetchProperty, handleZoneSubmit } from '../store/modules/property';
import { userLogout } from '../store/modules/application';
import SplashScreen from './SplashScreen';
import ActivityModal from '../components/activities';
import Dashboard from './Dashboard';
import Settings from '../components/settings';

const BlankComponent = () => { return null };

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
              component={BlankComponent}
              options={{
                tabBarLabel: '',
                tabBarIcon: () => (
                  <ActivityModal />
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
              {(props) => <Settings {...props} {...this.props}/>}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.property.loading,
  property: state.property
});

const mapDispatchToProps = {
  userLogout,
  fetchProperty,
  handleZoneSubmit
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
