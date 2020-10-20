import React, { Component, Fragment} from 'react';
import { Formik }from 'formik';
import { Text, View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'


export default class SettingsLanding extends Component {
  render() {
    const list = [
      {
        title: 'Property Information',
        icon: 'home',
        action: () => this.props.navigation.push('Property Information')
      },
      {
        title: 'Manage Property Zones',
        icon: 'puzzle-piece',
        action: () => this.props.navigation.push('Manage Property Zones')
      },
      {
        title: 'Logout',
        icon: 'sign-out-alt',
        action: this.props.userLogout
      },
    ]

    return (
      <>
        <View style={{marginTop: 20}}>
          {
            list.map((item, i) => (
              <ListItem key={i} bottomDivider onPress={item.action}>
                <Icon name={item.icon} type='font-awesome-5'/>
                <ListItem.Content>
                  <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            ))
          }
        </View>
      </>
    )
  }
}

