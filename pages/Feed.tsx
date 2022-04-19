import { SafeAreaView, Text } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'

const Feed = () => {
  return (
    <SafeAreaView style={tw`relative h-full`}>
      <Text>Feed</Text>
      <NavBar />
    </SafeAreaView>
  )
}

export default Feed