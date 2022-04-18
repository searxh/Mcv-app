import { View, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const TextField = (props:any) => {
  return (
    <View
        style={tw`mx-auto w-10/12 border-2 border-neutral-200 rounded-lg p-3 ${props.style}`}
    >
        <TextInput 
            style={tw`text-lg text-neutral-500`}
            placeholder='Enter something'
        />
    </View>
  )
}

export default TextField