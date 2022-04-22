/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Explore from './app/Home/Explore';
import { MenuProvider } from 'react-native-popup-menu';



const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <MenuProvider 
      
        >
      <Explore/>
      </MenuProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default App;
