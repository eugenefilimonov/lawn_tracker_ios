import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { Icon } from 'react-native-elements'
import { fetchProperty, handleZoneSubmit } from '../store/modules/property';
import { userLogout } from '../store/modules/application';
import SplashScreen from './SplashScreen';
import Activity from '../components/activities';
import Dashboard from './Dashboard';
import Settings from '../components/settings';

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
              {(props) => <Dashboard {...this.props} {...props} /> }
            </Tab.Screen>
            <Tab.Screen
              name="Add"
              component={Activity}
              options={{
                tabBarLabel: '',
                tabBarIcon: ({ color, size })=> (
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 0, // space from bottombar
                      height: 75,
                      width: 75,
                      borderRadius: 58,
                      backgroundColor: '#5a95ff',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Icon 
                      name="add"
                      color='#f1f6f9'
                      size={60}
                    />
                  </View>
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
const styles = StyleSheet.create({
  addButtonStyle: {
    position: 'absolute',
    bottom: 20, // space from bottombar
    height: 100,
    width: 100,
    borderRadius: 58,
    backgroundColor: '#5a95ff',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

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
