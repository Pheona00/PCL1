import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  Text, View  } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Footer from './.expo/Footer';
import Landing from './.expo/Landing';
import Login from './.expo/Login';
import Registration from './.expo/Registration';
import AccountRecovery from './.expo/AccountRecovery';
import Home from './.expo/Home';



export default function App() {
  const Stack = createStackNavigator();
  return (
    
      <SafeAreaProvider>
        
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Registration" component={Registration}/>
        <Stack.Screen name="AccountRecovery" component={AccountRecovery}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
    <Footer/>
      </SafeAreaProvider>

    
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    
  },
  
});