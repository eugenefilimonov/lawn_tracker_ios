import React, { Component, Fragment } from 'react';
import { Formik }from 'formik';
import { Text, View } from 'react-native';
import { Card, Button, Input} from 'react-native-elements';
import { TextLink, Loading } from '../../shared';
import deviceStorage from '../../services/deviceStorage';
import axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
  }

  login(values) {
    this.props.userLogin(values)
  }

  render() {
    return (
      <>
        <Formik 
          onSubmit={values => this.login(values)}
          initialValues={{ email: '', password: '' }}
        >
          {({ values, handleChange, handleSubmit, isValid }) => (
            <Fragment>
              <Text
                style={{
                  color: 'red'
                }}
              >
                {this.props.authError}
              </Text>
              <Input
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder="Email"
              />
              <Input
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
                secureTextEntry={true}
              />
              <Button 
                title='Sign In'
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </Fragment>  
          )}
        </Formik>
        <TextLink onPress={this.props.authSwitch}>
          Register
        </TextLink>
      </>
    );
  }
}

export { Login };
