import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login'
import LoginChula from './pages/LoginChula'
import React from 'react'
import LoadFonts from './fonts'
import AppLoading from 'expo-app-loading'

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false)
  if (!appIsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setAppIsReady(true)}
        onError={() => console.warn}
      />
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} options={{
          headerShown: false,
        }} />
        <Stack.Screen name="LoginChula" component={LoginChula} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
