import React, { Component, Fragment} from 'react';
import { Formik }from 'formik';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button, ListItem, Input} from 'react-native-elements';
import { TextLink } from '../../../shared';

export default class ManageZones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      zone: {
        name: '',
        total_area: ''
      }
    }
    this.toggleEditor = this.toggleEditor.bind(this);
    this.showZoneEditor = this.showZoneEditor.bind(this);
  }

  toggleEditor(zone) {
    if (zone) {
      this.setState({
        zone: {...zone}
      })
    }

    this.setState({
      showEditor: !this.state.showEditor
    })
  }

  showZoneEditor() {
    if (!this.state.showEditor) {
      return (
        <Button onPress={this.toggleEditor}buttonStyle={{backgroundColor: 'rgba(33, 121, 60, 1)'}} title='Add Zone' />
      )
    }

    return (
      <>
      <Formik 
        onSubmit={values => this.props.handleZoneSubmit(values)}
        initialValues={this.state.zone}
      >
        {({ values, handleChange, handleSubmit, isValid }) => (
          <>
            <Input
              value={values.name}
              onChangeText={handleChange('name')}
              placeholder="Zone Name"
            />
            <Input
              value={`${values.total_area}`}
              onChangeText={handleChange('total_area')}
              placeholder="Total Area"
            />
            <Button 
              title={values.id ? 'Update' : 'Create'}
              onPress={handleSubmit}
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
        <TextLink onPress={this.toggleEditor}>Cancel</TextLink>
      </>
    )
  }

  render() {
    return (
      <>
        <View style={{marginTop: 20 }}>
          <Card containerStyle={{padding:0, marginBottom: 20}} >
            {
              this.props.zones.map((item, i) => (
                <ListItem key={i} bottomDivider onPress={() => this.toggleEditor(item)}>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}: {item.total_area} Total Area</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              ))
            }
          </Card>
        </View>
        <View style={styles.container}>
          {this.showZoneEditor()}
        </View>
      </>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:'center',
  }
};
