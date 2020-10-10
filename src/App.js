import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from './store';
import Application from './screens';

const Stack = createStackNavigator();

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Application />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
