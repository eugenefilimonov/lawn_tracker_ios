import React, { Component, Fragment } from 'react';
import { Formik }from 'formik';
import { View, Text } from 'react-native';
import { Card, Button, Input} from 'react-native-elements';
import { TextLink, Loading } from '../../shared';
import deviceStorage from '../../services/deviceStorage';
import axios from 'axios';

class Registration extends Component {
  constructor(props){
    super(props);
    this.createUser = this.createUser.bind(this);
  }


  createUser(values) {
    const {email, password} = values;
    const {propertyName, street1, city, state} = values;
    this.props.createUser({user: {email: email, password: password}, property: {name: propertyName, address: {street1: street1, city: city, state: state}}})
  }

  render() {
    return (
      <>
        <Formik 
          onSubmit={values => this.createUser(values)}
          initialValues={{ email: '', password: '', propertyName: '', street1: '', city: '', state: ''}}
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
                value={values.propertyName}
                onChangeText={handleChange('propertyName')}
                placeholder="Property Name"
              />
              <Input
                value={values.street1}
                onChangeText={handleChange('street1')}
                placeholder="Property Street Address"
              />
              <Input
                value={values.city}
                onChangeText={handleChange('city')}
                placeholder="Property Street City"
              />
              <Input
                value={values.state}
                onChangeText={handleChange('state')}
                placeholder="Property Street State"
              />
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
                title='Create Account'
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </Fragment>  
          )}
        </Formik>
        <TextLink onPress={this.props.authSwitch}>
          Sign In
        </TextLink>
      </>
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
