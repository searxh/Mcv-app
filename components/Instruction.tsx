import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'

const Instruction = (props:any) => {
    const data = props.route.params
    return (
        <View style={tw`h-full bg-sky-100 p-2`}>
            <View style={tw`flex-1 shadow-md`}>
                <ScrollView style={tw`bg-white rounded-lg w-[95%] my-2 mx-auto`}>
                    <View style={tw`p-6`}>
                        {(data.instruction!==""||data.link!=="")
                        && (data.instruction!==undefined||data.link!==undefined)?
                            <Text style={tw.style('my-1 text-neutral-700 text-sm',{
                                fontFamily:'noto-sans-medium'
                            })}>
                                {data.instruction}
                            </Text>:
                            <Text style={tw.style('my-auto text-center text-sky-600 text-base',{
                                fontFamily:'noto-sans-medium'
                            })}>
                                No instruction was provided
                            </Text>
                        }
                        <TouchableOpacity>
                            <Text style={tw.style('my-1 text-sky-500 text-sm',{
                                    fontFamily:'noto-sans-medium'
                                })}>
                                {data.link}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Instruction