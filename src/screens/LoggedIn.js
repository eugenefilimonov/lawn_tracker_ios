import React, { Component } from 'react';
import { View, Button } from 'react-native';

export default class LoggedIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Logout' onPress={this.props.logout} />
      </View>
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
