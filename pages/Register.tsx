import { Dimensions, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import RegisterInstructor from '../components/RegisterInstructor'
import RegisterStudent from '../components/RegisterStudent'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'
import LoginButton from '../components/LoginButton'

const Register = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <Text style={tw.style('text-sky-600 text-xl my-4 ml-5',{
          fontFamily:'noto-sans-medium'
      })}>
          Registering
      </Text>
      <Tabs />
      <LoginButton callback={()=>{}} style='bg-pink-600 w-11/12 p-2 shadow-md'>
        <View style={tw`flex-row justify-center`}>
        <FontAwesomeNative
            icon={faSync}
            size={30}
            style={tw`text-white my-auto mr-5 mb-1`}
        />
        <View style={tw`flex-row`}>
            <Text style={tw.style('text-base text-center text-white',{
                fontFamily:'noto-sans-medium'
            })}>
                Sync courses with RegChula
            </Text>
        </View>
        </View>
      </LoginButton>
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
                fontSize: 14,
                color:'#ffffff',
                textTransform:'none',
            },
            tabBarItemStyle: {
                width:Dimensions.get('window').width/2,
            },
            tabBarIndicatorStyle:{
                backgroundColor:'#0173b6',
                height:'100%'
            },
            tabBarStyle:{
                borderTopWidth: 0.5,
                borderTopColor:'#d4d4d4',
                backgroundColor:'#0284c7'
            }
          }}
      >
          <Tab.Screen name={"As a Student"} component={RegisterStudent} />
          <Tab.Screen name={"As a new Instructor"} component={RegisterInstructor} />
      </Tab.Navigator>
    )
}