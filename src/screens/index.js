import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from './Auth';
import LoggedIn from './LoggedIn';
import SplashScreen from './SplashScreen';
import { verifyUser }from '../store/modules/application';

const Stack = createStackNavigator();

class Application extends Component {
  componentDidMount() {
    this.props.verifyUser()
  }

  render() {
    if (this.props.loading) {
      return  ( <SplashScreen /> )
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            { this.props.token ? 
                ( <Stack.Screen
                  name="My Lawn Tracker"
                  component={LoggedIn}
                />) 
                :
                ( <Stack.Screen
                  name="Authentication"
                  component={Auth}
                />) 
            }
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
  }
}

const mapStateToProps = state => ({
  loading: state.application.loading,
  token: state.application.jwt
});

const mapDispatchToProps = {
  verifyUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);
