import React, { Component } from 'react';
import { connect } from 'react-redux';

import Auth from './Auth';
import LoggedIn from './LoggedIn';
import SplashScreen from './SplashScreen';
import { verifyUser }from '../store/modules/application';
import { SafeAreaView } from 'react-native';


class Application extends Component {
  componentDidMount() {
    this.props.verifyUser()
  }

  render() {
    if (this.props.loading) {
      return  ( <SplashScreen /> )
    } else {
      return ( this.props.token ? <LoggedIn /> : <Auth /> )
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
