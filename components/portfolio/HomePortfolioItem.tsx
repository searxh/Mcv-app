import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { faSquarePollVertical, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

const HomePortfolioItem = ({ props }:any) => {
    return (
        <View 
            style={tw`w-[97%] flex-1 justify-between mx-1 flex-row bg-white rounded-md shadow-md p-2 py-5 mx-auto mb-1`}
        >
            <View style={tw`mx-1`}>
                <Text style={tw.style('text-sky-700 text-sm mx-1',{
                    fontFamily:'noto-sans-medium'
                })}>
                    {props.item}
                </Text>
            </View>
            <View style={tw`mx-1`}>
                <Text style={tw.style('text-green-600 text-base mx-1',{
                    fontFamily:'noto-sans-medium'
                })}>
                    {props.points}
                </Text>
            </View>
            <View style={tw`mx-1`}>
                <Text style={tw.style('text-neutral-700 text-base mx-1',{
                    fontFamily:'noto-sans-medium'
                })}>
                    / {props.totalpoints}
                </Text>
            </View>
            <View style={tw`mx-1`}>
                <Text style={tw.style('text-neutral-700 text-base mx-1',{
                    fontFamily:'noto-sans-medium'
                })}>
                    {props.percent}.00%
                </Text>
            </View>
            <View style={tw`flex-row`}>
                <TouchableOpacity
                    onPress={()=>{}}
                >
                    <FontAwesomeNative
                        icon={faSquarePollVertical}
                        size={25}
                        style={tw`text-sky-600 mx-1`}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{}}
                >
                    <FontAwesomeNative
                        icon={faShareFromSquare}
                        size={25}
                        style={tw`text-sky-600 mx-1`}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomePortfolioItem