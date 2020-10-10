import AsyncStorage from '@react-native-community/async-storage';

const deviceStorage = {
  async saveJWT(value) {
    try {
      await AsyncStorage.setItem('id_token', value);
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async deleteJWT() {
    try{
      await AsyncStorage.removeItem('id_token')
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },

  async loadJWT() {
    try {
      const value = await AsyncStorage.getItem('id_token');
      return value;
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  }

};

export default deviceStorage;
