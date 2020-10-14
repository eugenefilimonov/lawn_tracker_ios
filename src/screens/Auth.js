import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Login, Registration } from '../components';
import { userLogin, createUser } from '../store/modules/application';

class Auth extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLogin: true
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
        <Registration createUser={this.props.createUser} authError={this.props.authError} authSwitch={this.authSwitch}/>
      );
    } else {
      return(
        <Login userLogin={this.props.userLogin} authError={this.props.authError} authSwitch={this.authSwitch}/>
      );
    }
  }

  render() {
    return(
      <SafeAreaView style={styles.container}>
        {this.whichForm()}
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    margin: 10,
  },
  section: {
  }
}

const mapStateToProps = state => ({
  authError: state.application.authError
});

const mapDispatchToProps = {
  userLogin,
  createUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
