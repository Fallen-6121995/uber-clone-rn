/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';

import { store } from './store';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <>
       <Provider store={store}>
       
        <SafeAreaView>
            <HomeScreen />
        </SafeAreaView>
    
    </Provider>
    </>
  );
}


export default App;
