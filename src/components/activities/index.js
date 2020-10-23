import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Text, Overlay} from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { TextLink } from '../../shared/TextLinks';


export default Activity = () => {
  const [visible, setVisible] = useState(false);
  const [activity, setActivity] = useState('start');

  const toggleOverlay = () => {
    setVisible(!visible);
    setActivity('start');
  };

  const toggleActivity = (activity) => {
    setActivity(activity);
  }

  return (
    <>
      <View>
        <View style={styles.content}>
          <Text h4 style={{marginBottom: 20}}>Add Activity</Text>
          <Button onPress={() => setActivity('mow')} buttonStyle={styles.buttonStyle} title='Mow' />
          <Button onPress={() => setActivity('product')} buttonStyle={styles.buttonStyle} title='Product App' />
          <TextLink onPress={toggleOverlay}>
            Cancel
          </TextLink>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'absolute',
    height: '90%',
    width: '90%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  content: {
    alignItems: 'center'
  },
  buttonStyle: {
    minHeight: 250,
    minWidth: '80%',
    marginBottom: 20,
    borderRadius: 25,
  },
  addButtonStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'rgba(33, 121, 60, 1)',
    borderRadius: 100,
  }
});
