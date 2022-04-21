import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import React from 'react'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const ReturnButton = (props:any) => {
  return (
    <TouchableOpacity
        style={tw`w-12 h-12 ${props.style}`}
        onPress={()=>props.callback()}
    >
        <FontAwesomeNative
            icon={faChevronLeft}
            size={35}
            style={tw`text-neutral-700 mx-auto my-auto`}
        />
    </TouchableOpacity>
  )
}

export default ReturnButton