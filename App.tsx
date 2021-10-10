import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  Font.loadAsync({
    'nunito-light': require('./assets/fonts/Nunito-Light.ttf'),
    'nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded) return (
    <AppLoading 
      // @ts-ignore
      startAsync={fetchFonts} 
      onFinish={() => setDataLoaded(true)}
      onError={() => console.log('error')}
    />
  )

  return (
    <View style={styles.container}>
      <Text>Start</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
