import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Auth from './screens/Auth';
import deviceStorage from './services/deviceStorage';
import LoggedIn from './screens/LoggedIn';

const Stack = createStackNavigator();

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
    }

    this.newToken = this.newToken.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.loadJWT();
  }

  newToken(token) {
    this.setState({
      jwt: token
    });
  }

  render() {
    if (this.state.jwt) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoggedIn"
            component={LoggedIn}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
    } else {
      return <Auth newToken={this.newToken} />
    }
  }
}
