import { View, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const InputField = (props:any) => {
  return (
    <View
        style={tw`mx-auto w-10/12 border-2 border-neutral-300 rounded-lg p-5 pt-3 ${props.style}`}
    >
      <TextInput 
        style={tw`text-xl text-neutral-500`}
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        keyboardType={'default'}
      />
    </View>
  )
}

export default InputField