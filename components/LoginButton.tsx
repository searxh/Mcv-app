import { View, Text, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import React from 'react'

const LoginButton = (props:any) => {
    return (
        <TouchableOpacity 
            onPress={()=>props.callback()}
            style={tw`p-5 rounded-lg w-10/12 mx-auto my-3 ${props.style}`}
        >
            {props.children}
        </TouchableOpacity>
    )
}

export default LoginButton