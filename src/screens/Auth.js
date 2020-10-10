import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Text, View } from 'react-native';
import { Login, Registration } from '../components';
import { userLogin } from '../store/modules/application';

class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLogin: false
    };
    this.whichForm = this.whichForm.bind(this);
    this.authSwitch = this.authSwitch.bind(this);
  }

  authSwitch() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  whichForm() {
    if(!this.state.showLogin){
      return(
        <Registration newToken={this.props.newToken} authSwitch={this.authSwitch}/>
      );
    } else {
      return(
        <Login userLogin={this.props.userLogin} authError={this.props.authError} authSwitch={this.authSwitch}/>
      );
    }
  }

  render() {
    return(
      <View style={styles.container}>
        {this.whichForm()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
}

const mapStateToProps = state => ({
  authError: state.application.authError
});

const mapDispatchToProps = {
  userLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
