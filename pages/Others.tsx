import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'

const Others = () => {
  return (
    <SafeAreaView style={tw`relative h-full`}>
      <Text>Others</Text>
      <NavBar />
    </SafeAreaView>
  )
}

export default Others