import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router';
import * as Font from 'expo-font';

let customFonts = {
  'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
  'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf')
};

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      )
    } else {
      return null;
    }
  }
}
