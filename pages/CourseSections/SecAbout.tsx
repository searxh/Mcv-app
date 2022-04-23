import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const SecAbout = () => {
  return (
    <View style={tw`bg-sky-100 h-full`}>
      <View style={tw`p-10`}>
        <Text
          style={tw.style('text-xl text-center text-sky-600',{
              fontFamily:'noto-sans-medium'
          })}
        >
            This feature has not yet been implemented
        </Text>
      </View>
    </View>
  )
}

export default SecAbout