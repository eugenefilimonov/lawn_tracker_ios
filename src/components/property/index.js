import React, { Component, Fragment} from 'react';
import { Formik }from 'formik';
import { Text, View } from 'react-native';
import { Card, Button, Input} from 'react-native-elements';

class PropertyInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {...this.props.property.address}
    }
  }


  render() {
    return (
      <>
      </>
    )
  }
}

export { PropertyInformation };
