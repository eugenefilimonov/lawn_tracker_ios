import React, { Component } from 'react';
import Auth from './screens/Auth';
import deviceStorage from './services/deviceStorage';
import LoggedIn from './screens/LoggedIn';

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
    if (!this.state.jwt) {
      return (
        <Auth newToken={this.newToken}/>
      );
    } else if (this.state.jwt) {
      return (
        <LoggedIn logout={this.deleteJWT} />
      )
    }
  }
}
