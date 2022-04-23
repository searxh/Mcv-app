import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome'
import { faSquarePollVertical, faShareFromSquare } from '@fortawesome/free-solid-svg-icons'

const HomePortfolioItem = ({ props, isTotal, style }:any) => {
    return (
        <View 
            style={tw`w-[97%] justify-between mx-1 flex-row ${style} 
            ${!isTotal?'bg-white':'bg-amber-500'} rounded-md shadow-md p-2 py-5 mx-auto mb-1`}
        >
            <View style={tw`mx-1`}>
                <Text style={!isTotal?
                    tw.style('text-sky-700 text-sm mx-1',{
                        fontFamily:'noto-sans-medium'
                    }):
                    tw.style('text-white text-sm mx-1',{
                        fontFamily:'noto-sans-medium'
                    })}
                >
                    {props.item}
                </Text>
            </View>
            <View style={tw`mx-1`}>
                <Text style={!isTotal?
                    tw.style('text-green-600 text-base mx-1',{
                        fontFamily:'noto-sans-medium'
                    }):
                    tw.style('text-white text-base mx-1',{
                        fontFamily:'noto-sans-medium'
                    })}
                >
                    {props.points.toFixed(2)}
                </Text>
            </View>
            <View style={tw`mx-1`}>
                <Text style={!isTotal?
                    tw.style('text-neutral-700 text-sm mx-1',{
                        fontFamily:'noto-sans-medium'
                    }):
                    tw.style('text-white text-sm mx-1',{
                        fontFamily:'noto-sans-medium'
                    })}
                >
                    / {props.totalpoints}
                </Text>
            </View>
            <View style={tw`mx-1`}>
                <Text style={!isTotal?
                    tw.style('text-neutral-700 text-base mx-1',{
                        fontFamily:'noto-sans-medium'
                    }):
                    tw.style('text-amber-500 text-base mx-1',{
                        fontFamily:'noto-sans-medium'
                    })}
                >
                    {props.percent.toFixed(2)}%
                </Text>
            </View>
            <View style={tw`flex-row`}>
                <TouchableOpacity
                    onPress={()=>{}}
                >
                    <FontAwesomeNative
                        icon={faSquarePollVertical}
                        size={25}
                        style={tw`${!isTotal?'text-sky-600':'text-white'} mx-1`}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>{}}
                >
                    <FontAwesomeNative
                        icon={faShareFromSquare}
                        size={25}
                        style={tw`${!isTotal?'text-sky-600':'text-white'} mx-1`}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomePortfolioItem