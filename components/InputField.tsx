import { View, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const InputField = (props:any) => {
  return (
    <View
        style={tw`mx-auto border-2 border-neutral-300 rounded-lg p-4 pt-3 ${props.style}`}
    >
      <TextInput
        style={tw.style('text-lg text-neutral-600',{
          fontFamily: 'noto-sans-medium'
        })}
        placeholder={props.placeholder}
        secureTextEntry={props.secure}
        keyboardType={'default'}
      />
    </View>
  )
}

export default InputField