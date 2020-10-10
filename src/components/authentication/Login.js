import React, { Component, Fragment } from 'react';
import { Text, View } from 'react-native';
import { Input, TextLink, Loading, Button } from '../../shared';
import deviceStorage from '../../services/deviceStorage';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    };

    this.login = this.login.bind(this);
  }

  login() {
    const { email, password } = this.state;

    this.setState({ 
      loading: true 
    });

    this.props.userLogin(email, password).then(() => {
        this.setState({
          loading: false
        })
    });
  }

  render() {
    const { email, password, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
      <Fragment>
        <View style={form}>
          <View style={section}>
            <Input
              placeholder="user@email.com"
              label="Email"
              value={email}
              onChangeText={email => this.setState({ email })}
            />
          </View>

          <View style={section}>
            <Input
              secureTextEntry
              placeholder="password"
              label="Password"
              value={password}
              onChangeText={password => this.setState({ password })}
            />
          </View>

          <Text style={errorTextStyle}>
            {this.props.authError}
          </Text>

          {!loading ?
            <Button onPress={this.login}>
              Login
            </Button>
            :
            <Loading size={'large'} />}

        </View>
        <TextLink onPress={this.props.authSwitch}>
          Don't have an account? Register!
        </TextLink>
      </Fragment>
    );
  }
}

const styles = {
  form: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  section: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ddd',
  },
  errorTextStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'red'
  }
};

export { Login };
