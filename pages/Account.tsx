import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'

const Account = () => {
  return (
    <SafeAreaView style={tw`relative h-full`}>
      <Text>Account</Text>
      <NavBar />
    </SafeAreaView>
  )
}

export default Account