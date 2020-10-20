import React, { Component } from 'react';
import { Formik }from 'formik';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsLanding from './components/SettingsLanding';
import ManageZones from './components/ManageZones';

const Stack = createStackNavigator();
const BlankComponent = () => { return null };

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {...this.props.property.address}
    }
  }

  render() {
    return (
      <>
        <Stack.Navigator>
          <Stack.Screen name="Settings">
            {(props) => <SettingsLanding {...props} userLogout={this.props.userLogout}/>}
          </Stack.Screen>
          <Stack.Screen name="Property Information" component={BlankComponent} />
          <Stack.Screen name="Manage Property Zones">
            {(props) => <ManageZones handleZoneSubmit={this.props.handleZoneSubmit} zones={this.props.property.zones}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </>
    )
  }
}
