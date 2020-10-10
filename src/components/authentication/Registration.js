import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Input, TextLink, Button, Loading } from '../../shared';
import deviceStorage from '../../services/deviceStorage';
import axios from 'axios';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false
    };

    this.createUser = this.createUser.bind(this);
  }


  createUser() {
    this.setState({ loading: true });
    const { email, password } = this.state;
    const params = {
      user: {
        email: email,
        password: password
      }
    }

    this.props.createUser(params).then(() => {
        this.setState({
          loading: false
        })
    });

  }
  render() {
    const { email, password, password_confirmation, loading } = this.state;
    const { form, section, errorTextStyle } = styles;

    return (
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
            <Button onPress={this.createUser}>
              Register
            </Button>
            :
            <Loading size={'large'} />}
          <Button onPress={this.props.authSwitch}>Login</Button>
        </View>
    );
  }
}

export { Registration };

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
