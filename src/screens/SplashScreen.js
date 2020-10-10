import React, { Component, Fragment } from 'react';
import { Loading } from '../shared/loading';
import { View } from 'react-native';

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Loading size={'large'} />
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
