import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'

const Register = () => {
  return (
    <SafeAreaView style={tw`relative h-full`}>
      <Text>Register</Text>
      <NavBar />
    </SafeAreaView>
  )
}

export default Register