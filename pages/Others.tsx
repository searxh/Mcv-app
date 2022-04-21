import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import NavBar from '../components/NavBar'
import tw from 'twrnc'

const Others = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`flex-1`}>

      </View>
      <NavBar />
    </SafeAreaView>
  )
}

export default Others