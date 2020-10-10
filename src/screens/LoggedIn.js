import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Button } from 'react-native';
import { userLogout } from '../store/modules/application';

class LoggedIn extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Logout' onPress={this.props.userLogout} />
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

const mapDispatchToProps = {
  userLogout
};

export default connect(null, mapDispatchToProps)(LoggedIn);
