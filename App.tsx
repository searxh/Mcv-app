import { StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import LoadFonts from './fonts'
import AppLoading from 'expo-app-loading'
import tw, { useDeviceContext } from 'twrnc'
import Routes from './Routes'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false)
  useDeviceContext(tw, { withDeviceColorScheme: true })
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
      <KeyboardAvoidingView
          behavior={Platform.OS === 'ios'?'padding':'height'}
          keyboardVerticalOffset={Platform.OS === 'ios'?-64:0}
          enabled={false}
          style={{flex:1}}
      >
        <Routes />
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </NavigationContainer>
  )
}
