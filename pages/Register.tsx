import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import RegisterInstructor from '../components/RegisterInstructor'
import RegisterStudent from '../components/RegisterStudent'

const Register = () => {
  return (
    <SafeAreaView style={tw`bg-white relative h-full`}>
      <Text style={tw.style('text-sky-600 text-xl my-6 ml-5',{
          fontFamily:'noto-sans-medium'
      })}>
          Registering
      </Text>
      <Tabs />
      <NavBar />
    </SafeAreaView>
  )
}

export default Register

const Tabs = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
      <Tab.Navigator
          screenOptions={{
              tabBarLabelStyle: { 
                  fontFamily:'noto-sans-medium',
                  fontSize: 15,
              },
              tabBarItemStyle: {
                  borderTopWidth: 0.5,
                  borderTopColor:'#d5d5d5'
              },
          }}
      >
          <Tab.Screen name={"As a Student"} component={RegisterStudent} />
          <Tab.Screen name={"As a new Instructor"} component={RegisterInstructor} />
      </Tab.Navigator>
    )
}