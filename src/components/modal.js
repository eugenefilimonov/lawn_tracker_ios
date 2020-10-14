import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, Text, Overlay} from 'react-native-elements';
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import { TextLink } from '../shared/TextLinks';

const Stack = createStackNavigator();

export default PayScreen = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Button onPress={toggleOverlay}
        buttonStyle={styles.addButtonStyle}
        icon={
          <Icon name="add-circle-outline" color='white' size={60}/>
        }
      />
      <View>
        <Overlay overlayStyle={styles.overlayContainer} isVisible={visible} onBackdropPress={toggleOverlay}>
          <View style={styles.content}>
            <Text h4 style={{marginBottom: 20}}>Add Activity</Text>
            <Button buttonStyle={styles.buttonStyle} title='Mow' />
            <Button buttonStyle={styles.buttonStyle} title='Product App' />
            <TextLink onPress={toggleOverlay}>
              Cancel
            </TextLink>
          </View>
        </Overlay>
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
    marginBottom: 20
  },
  addButtonStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'rgba(33, 121, 60, 1)',
    borderRadius: 100,
  }
});
