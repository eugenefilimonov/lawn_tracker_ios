import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Button } from 'react-native';
import { fetchProperty } from '../store/modules/property';
import { userLogout } from '../store/modules/application';
import SplashScreen from './SplashScreen';

class LoggedIn extends Component {
  componentDidMount() {
    this.props.fetchProperty();
  }

  render() {
    console.log(this.props)
    if (this.props.loading) {
      return <SplashScreen />
    }

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
